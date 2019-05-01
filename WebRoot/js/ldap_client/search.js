/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.ldap.Search');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ldap.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ldap.Search.repeatedFields_, null);
};
goog.inherits(proto.ldap.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ldap.Search.displayName = 'proto.ldap.Search';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ldap.Search.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ldap.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.ldap.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ldap.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ldap.Search.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basedn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    attributesList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ldap.Search}
 */
proto.ldap.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ldap.Search;
  return proto.ldap.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ldap.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ldap.Search}
 */
proto.ldap.Search.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasedn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ldap.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ldap.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ldap.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ldap.Search.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasedn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ldap.Search.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ldap.Search.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string baseDN = 2;
 * @return {string}
 */
proto.ldap.Search.prototype.getBasedn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ldap.Search.prototype.setBasedn = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.ldap.Search.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ldap.Search.prototype.setFilter = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string attributes = 4;
 * @return {!Array<string>}
 */
proto.ldap.Search.prototype.getAttributesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.ldap.Search.prototype.setAttributesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.ldap.Search.prototype.addAttributes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.ldap.Search.prototype.clearAttributesList = function() {
  this.setAttributesList([]);
};


