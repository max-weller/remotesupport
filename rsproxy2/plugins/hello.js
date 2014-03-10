// Generated by LiveScript 1.2.0
(function(){
  var fs, pem, _;
  fs = require("fs");
  pem = require("pem");
  _ = require("underscore");
  Plugin("hello_world", "0.0.1", function(App){
    return App.on("connection", function(handler){
      return handler.messenger["hello:who_am_i"] = function(type, data, next){
        return next(null, _.extend({
          id: handler.id,
          auth: handler.authState
        }, handler.hostInfo));
      };
    });
  });
}).call(this);
