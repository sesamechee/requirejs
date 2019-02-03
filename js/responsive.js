var layout;
var IE9down = false;
var IpadFlag = false;
var MobileFlag = false;

$(document).ready(function(){
	detectBroswer();
	new responsive();
});

function detectBroswer(){
	var ua = window.navigator.userAgent.toLowerCase();
	var ver = window.navigator.appVersion.toLowerCase();
	var gHasTouch = 'ontouchstart' in window;

	if( !gHasTouch ) {
		$('body').addClass('noTouch');
	}

	if (ua.indexOf("msie") != -1){
		if (ver.indexOf("msie 6.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 7.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 8.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 9.") != -1){
			IE9down =true;
		}else if (ver.indexOf("msie 10.") != -1){
			IE9down =false;
		}else{
			IE9down =false;
		}
	}

	if (ua.match(/(iphone)/) || ua.match(/(ipad)/) || ua.match(/(ipod)/) || ua.match(/(android)/) )	{
		MobileFlag = true;
	}

	if (ua.match(/(ipad)/) )	{
		IpadFlag = true;
	}

	if ( IE9down ) {
		jQuery.fx.interval = 1000 / 30;
	} else {
		jQuery.fx.interval = 1000 / 60;
	}

}

function responsive() {
	var _self = this;

	_self.layoutSize = [0, 780 , 1200];
	_self.layout = ['mobile', 'tablet' , 'desktop'];

	_self.window = $(window);
	_self.body = $('body');
	_self.current = _self.layout[_self.layout.length - 1];
	if (IE9down) {
		_self.changeClass(_self.layout[1]);
	} else {
		_self.init();
	}
}
responsive.prototype.init = function () {
	var _self = this;

	_self.changeClass(_self.layout[_self.checkSize()]);
	_self.addEvent();
};
responsive.prototype.addEvent = function () {
	var _self = this;

	_self.window.on('resize', function () {
		_self.changeClass(_self.layout[_self.checkSize()]);
	});
};
responsive.prototype.checkSize = function () {
	var _self = this;
	var _layout = 0;
	var _windowWidth = window.innerWidth || $(window).width();

	for (var i = 0; i < _self.layoutSize.length; i++) {
		if (_self.layoutSize[i] > _windowWidth ) {
			break;
		} else {
			_layout = i;
		}
	}
	return _layout;
};
responsive.prototype.changeClass = function (className) {
	var _self = this;

	if (!_self.body.hasClass(className)) {
		for (var i = 0; i < _self.layoutSize.length; i++) {
			_self.body.removeClass(_self.layout[i]);
		}
		_self.body.addClass(className);
		layout = className;
		$(document).trigger('responsive', className);
	}
};