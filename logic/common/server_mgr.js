

function server_mgr() {
}

server_mgr.prototype.prepare = function (cb) {
	server.log("server_mgr prepare.");
	cb();
}

server_mgr.prototype.stop = function (cb) {
    server.log("server_mgr stop.");
    cb();
};

module.exports = new server_mgr();