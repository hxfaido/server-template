var handler = module.exports;

var SYS_MSG = server.CONST.SYS_MSG;

handler[SYS_MSG.CONNECT] = function (msg, s) {

    //handle client msg only when server prepare ok.  
    if(!server.prepare){
	    s.destroy();
    }
	else
	{
		//do something
		s.setbody(2);				//use bson
		s.sethead(2,10*1024);		//max recv msg size 10k
		s.setcrypto(new server.crypto.xor());
	}
};


