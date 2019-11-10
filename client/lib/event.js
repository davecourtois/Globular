"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_pb_1 = require("./event/eventpb/event_pb");
/**
 * Create a "version 4" RFC-4122 UUID (Universal Unique Identifier) string.
 * @returns {string} A string containing the UUID.
 */
function randomUUID() {
    var s = new Array();
    var itoh = '0123456789abcdef'; // Make array of random hex digits. The UUID only has 32 digits in it, but we
    // allocate an extra items to make room for the '-'s we'll be inserting.
    for (var i = 0; i < 36; i++)
        s[i] = Math.floor(Math.random() * 0x10); // Conform to RFC-4122, section 4.4
    s[14] = 4; // Set 4 high bits of time_high field to version
    s[19] = s[19] & 0x3 | 0x8; // Specify 2 high bits of clock sequence
    // Convert to hex chars
    for (var i = 0; i < 36; i++)
        s[i] = itoh[s[i]]; // Insert '-'s
    s[8] = s[13] = s[18] = s[23] = '-';
    return s.join('');
}
/**
 * That local and distant event hub.
 */
var EventHub = /** @class */ (function () {
    /**
     * @param {*} service If undefined only local event will be allow.
     */
    function EventHub(service) {
        // The network event bus.
        this.service = service;
        // Subscriber function map.
        this.subscribers = {};
        // Subscription name/uuid's maps
        this.subscriptions = {};
    }
    /**
     * @param {*} name The name of the event to subcribe to.
     * @param {*} onsubscribe That function return the uuid of the subscriber.
     * @param {*} onevent That function is call when the event is use.
     */
    EventHub.prototype.subscribe = function (name, onsubscribe, onevent) {
        // Register the local subscriber.
        var uuid = randomUUID();
        if (this.subscribers[name] == undefined) {
            this.subscribers[name] = {};
            if (this.service != undefined) {
                // The first step is to subscribe to an event channel.
                var rqst = new event_pb_1.SubscribeRequest();
                rqst.setName(name);
                if (this.service != null) {
                    var stream = this.service.subscribe(rqst, {});
                    // Get the stream and set event on it...
                    stream.on('data', function (hub, name) {
                        return function (rsp) {
                            if (rsp.hasUuid()) {
                                hub.subscriptions[name] = rsp.getUuid();
                            }
                            else if (rsp.hasEvt()) {
                                var evt = rsp.getEvt();
                                var data = new TextDecoder("utf-8").decode(evt.getData());
                                // dispatch the event localy.
                                hub.dispatch(name, data);
                            }
                        };
                    }(this, name));
                    stream.on('status', function (status) {
                        if (status.code == 0) {
                            /** Nothing to do here. */
                        }
                    });
                    stream.on('end', function () {
                        // stream end signal
                        /** Nothing to do here. */
                    });
                }
            }
        }
        // Set the event callback function.
        this.subscribers[name][uuid] = onevent;
        // call on subscribe call back.
        onsubscribe(uuid);
    };
    /**
     *
     * @param {*} name
     * @param {*} uuid
     */
    EventHub.prototype.unSubscribe = function (name, uuid) {
        // Remove the local subscriber.
        delete this.subscribers[name][uuid];
        if (Object.keys(this.subscribers[name]).length == 0) {
            delete this.subscribers[name];
            // disconnect from the distant server.
            if (this.service != undefined) {
                var request = new event_pb_1.UnSubscribeRequest();
                request.setName(name);
                request.setUuid(this.subscriptions[name]);
                // remove the subcription uuid.
                delete this.subscriptions[name];
                // Now I will test with promise
                this.service.unSubscribe(request)
                    .then(function (resp) {
                    /** Nothing to do here */
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        }
    };
    /**
     * Publish an event on the bus, or locally in case of local event.
     * @param {*} name The  name of the event to publish
     * @param {*} data The data associated with the event
     * @param {*} local If the event is not local the data must be seraliaze before sent.
     */
    EventHub.prototype.publish = function (name, data, local) {
        if (this.service == undefined || local) {
            this.dispatch(name, data);
        }
        else {
            // Create a new request.
            var request = new event_pb_1.PublishRequest();
            var evt = new event_pb_1.Event();
            evt.setName(name);
            var enc = new TextEncoder(); // always utf-8
            // encode the string to a array of byte
            evt.setData(enc.encode(data));
            request.setEvt(evt);
            // Now I will test with promise
            this.service.publish(request)
                .then(function (resp) {
                /** Nothing to do here. */
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    /** Dispatch the event localy */
    EventHub.prototype.dispatch = function (name, data) {
        for (var uuid in this.subscribers[name]) {
            // call the event callback function.
            this.subscribers[name][uuid](data);
        }
    };
    return EventHub;
}());
exports.EventHub = EventHub;
