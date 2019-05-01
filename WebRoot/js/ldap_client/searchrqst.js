/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.ldap.SearchRqst');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ldap.Search');


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
proto.ldap.SearchRqst = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ldap.SearchRqst, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ldap.SearchRqst.displayName = 'proto.ldap.SearchRqst';
}


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
proto.ldap.SearchRqst.prototype.toObject = function(opt_includeInstance) {
  return proto.ldap.SearchRqst.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ldap.SearchRqst} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ldap.SearchRqst.toObject = function(includeInstance, msg) {
  var f, obj = {
    search: (f = msg.getSearch()) && proto.ldap.Search.toObject(includeInstance, f)
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
 * @return {!proto.ldap.SearchRqst}
 */
proto.ldap.SearchRqst.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ldap.SearchRqst;
  return proto.ldap.SearchRqst.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ldap.SearchRqst} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ldap.SearchRqst}
 */
proto.ldap.SearchRqst.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ldap.Search;
      reader.readMessage(value,proto.ldap.Search.deserializeBinaryFromReader);
      msg.setSearch(value);
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
proto.ldap.SearchRqst.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ldap.SearchRqst.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ldap.SearchRqst} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ldap.SearchRqst.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ldap.Search.serializeBinaryToWriter
    );
  }
};


/**
 * optional Search search = 1;
 * @return {?proto.ldap.Search}
 */
proto.ldap.SearchRqst.prototype.getSearch = function() {
  return /** @type{?proto.ldap.Search} */ (
    jspb.Message.getWrapperField(this, proto.ldap.Search, 1));
};


/** @param {?proto.ldap.Search|undefined} value */
proto.ldap.SearchRqst.prototype.setSearch = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ldap.SearchRqst.prototype.clearSearch = function() {
  this.setSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ldap.SearchRqst.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 1) != null;
};


