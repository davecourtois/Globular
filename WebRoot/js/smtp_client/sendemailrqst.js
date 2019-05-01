/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.smtp.SendEmailRqst');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.smtp.Email');


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
proto.smtp.SendEmailRqst = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.smtp.SendEmailRqst, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.smtp.SendEmailRqst.displayName = 'proto.smtp.SendEmailRqst';
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
proto.smtp.SendEmailRqst.prototype.toObject = function(opt_includeInstance) {
  return proto.smtp.SendEmailRqst.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.smtp.SendEmailRqst} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smtp.SendEmailRqst.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: (f = msg.getEmail()) && proto.smtp.Email.toObject(includeInstance, f)
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
 * @return {!proto.smtp.SendEmailRqst}
 */
proto.smtp.SendEmailRqst.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.smtp.SendEmailRqst;
  return proto.smtp.SendEmailRqst.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.smtp.SendEmailRqst} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.smtp.SendEmailRqst}
 */
proto.smtp.SendEmailRqst.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.smtp.Email;
      reader.readMessage(value,proto.smtp.Email.deserializeBinaryFromReader);
      msg.setEmail(value);
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
proto.smtp.SendEmailRqst.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.smtp.SendEmailRqst.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.smtp.SendEmailRqst} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.smtp.SendEmailRqst.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.smtp.Email.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.smtp.SendEmailRqst.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.smtp.SendEmailRqst.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Email email = 2;
 * @return {?proto.smtp.Email}
 */
proto.smtp.SendEmailRqst.prototype.getEmail = function() {
  return /** @type{?proto.smtp.Email} */ (
    jspb.Message.getWrapperField(this, proto.smtp.Email, 2));
};


/** @param {?proto.smtp.Email|undefined} value */
proto.smtp.SendEmailRqst.prototype.setEmail = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.smtp.SendEmailRqst.prototype.clearEmail = function() {
  this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.smtp.SendEmailRqst.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 2) != null;
};


