/**
* config
*/
requirejs.config({
	urlArgs: 'bust='+(+new Date()),
	config: {
		es6: {
			resolveModuleSource: function(source) {
				return 'es6!'+source;
			}
		}
	},
	baseUrl:'/',
	// scriptType: 'text/babel',
	paths:{
		'polyfill'      :"https://cdn.polyfill.io/v2/polyfill.min",
		'domReady'		:"./lib/domReady",
		'jquery'        :'./lib/jquery-3.3.1.min',
		'magnific-popup':'./lib/magnific-popup/jquery.magnific-popup.min',
		'selectric'		:'./lib/selectric/jquery.selectric.min',
		'responsive'    :'./js/responsive',
		'validation'	:'./js/validation',
		'common'        :'./js/common',
		'index'         :'./js/index',
		'loader'        :'./js/loader'
	},
	shim:{
		'responsive'    :['jquery'],
		'magnific-popup':['jquery'],
		'jquery-ui'     :['jquery'],
		'common'        :['jquery', 'selectric'],
		'loader'        :[
			"jquery",
			"magnific-popup",
			'selectric',
			"responsive",
			'common'
		]
	}
});

// require(["polyfill"], function(){
	require(["loader"], function(){
		var ref = $('script[data-ref]').data('ref');
		if (ref) {
			require([ref]);
		}
	});
// });
