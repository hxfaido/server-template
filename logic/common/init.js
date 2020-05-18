//--- init server ---//

//for prepare
server.prepare = false;



//prepare
server.server_mgr = require("./server_mgr");
var mgr_arr = [server.server_mgr];


server.fn.async(mgr_arr, "prepare", function() {
	
	server.log("->->->->->server prepare ok.->->->->->");
	server.prepare = true;
});

server.on("dynamic", function (dynamic) {
    server.log("dynamic.ini has change!!");
});

server.on("stop", function() {
	server.prepare = false;
    server.fn.async(mgr_arr, "stop", function(){
	    server.stop();
    });
});
