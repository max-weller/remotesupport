// Generated by LiveScript 1.2.0
(function(){
  var fs, pem, _;
  fs = require("fs");
  pem = require("pem");
  _ = require("underscore");
  Plugin("admin", "0.0.1", function(App){
    return App.on("connection", function(handler){
      if (handler.authState !== "admin") {
        return;
      }
      return handler.messenger["admin:get_hosts"] = function(type, data, next){
        var hosts, i, host;
        hosts = [];
        for (i in App.connections) {
          host = App.connections[i];
          hosts.push(_.extend({
            id: host.id,
            pendingCSR: host.pendingCSR ? true : false,
            auth: host.authState
          }, host.hostInfo));
        }
        return next(null, hosts);
      };
    });
  });
}).call(this);
