require(["common"], function() {
	require(["domReady!"], function() {
		$('select').selectric();
		hideLoading();
		
		setTimeout(function(){
			animationInit();
		},500);
	});
});

function animationInit() {
	var animateObj = document.querySelectorAll('.animate');
	observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.intersectionRatio > 0) {
				$(entry.target).addClass($(entry.target).data('anim') + ' animated');
			}
		});
	}, {
		root: null,
		threshold: 0.5
	});

	animateObj.forEach(function(image) {
		observer.observe(image);
	});
}

function showLoading(){
	$('body').addClass('loading');
}

function hideLoading(){
	$('body').removeClass('loading');
}

function scrollto( target ){
	var _target = ( target === undefined )? 'body' : target ;
	$('html, body').animate({
		scrollTop: $(_target).offset().top
	}, 500);
}

function popupBox( target , config ) {
	var _settings = {
		items: {
			src: target,
			type: 'inline'
		},
		showCloseBtn : true,
		fixedContentPos : true,
		mainClass: 'mfp-fade',
		removalDelay: 300,
		fixedBgPos : true,
		closeOnBgClick: true,
		closeMarkup : '<button title="%title%" class="mfp-close"></button>',
		callbacks:{
			open: function(){

			},
			close: function(){

			}
		}
	};

	$.extend(_settings, config);
	$.magnificPopup.open(_settings);
}

function alertMsg( msg , config ) {
	$('.alertPopup .popupContent').html(msg);

	popupBox($('.alertPopup'), config);
}

function videoPop( youtubeID , config ) {
	var _settings = {
		callbacks:{
			open: function(){
				$('.videoPopup .videoWrapper').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+ youtubeID +'?rel=0&autoplay=1&wmode=transparent" frameborder="0" allowfullscreen></iframe>');
			},
			close: function(){
				$('.videoPopup .videoWrapper').html('');
			}
		}
	};

	$.extend(_settings, config);
	popupBox($('.videoPopup'), _settings);
}