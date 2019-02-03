
formValidation = {
	checkEmpty: function(str){return String(str).trim().length==0?true:false},
	checkPID: function(int){ var regexp=/^\d{4}/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkNumber: function(int){ var regexp=/^\d{8,}/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkMobile: function(int){ var regexp=/^(4|5|6|7|8|9)\d{7}$/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkMobileMO: function(int){ var regexp=/^(6)\d{7}$/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkMobileCN: function(int){ var regexp=/^(1)\d{10}$/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkPhone: function(int){ var regexp=/^\d{8}$/g; if(!regexp.test(int)){ return true; }else{ return false; } },
	checkEmail: function(email){ var regexp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; if(!regexp.test(email)){ return true; }else{ return false; } },
	checkEnglish: function(text){
		if( !/^[A-Za-z\s]*$/.test(text) ){
			return true;
		}else{
			return false;
		}
	},
	checkChinese: function(text){
		var re1 = new RegExp("^[\u4E00-\uFA29]*$"); //Chinese character range
		var re2 = new RegExp("^[\uE7C7-\uE7F3]*$"); //Chinese character range
		text = text.replace(/(^\s*)|(\s*$)/g,'');

		if (!(re1.test(text) && (! re2.test(text)))){
			return true;
		}else{
			return false;
		}
	}
}
