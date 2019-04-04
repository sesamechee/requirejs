'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var imagemin = require('gulp-imagemin');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

var paths = {
	browserSyncOption: {
		proxy: 'http://requirejs.demo/',
		open: 'external',
		ghostMode: false
	},
	images: './images/**/*',
	css: './css/sass/**/*',
	scripts: './js/**/*',
	icons: './images/icons/*.svg',
	html: ['./html/**/*', './include/**/*']
};

gulp.task('scripts', function () {
	gulp.src(paths.scripts)
		.pipe(browserSync.stream());
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('images'))
		.pipe(browserSync.stream());
});

gulp.task('Iconfont', function () {
	gulp.src(paths.icons)
		.pipe(iconfontCss({
			fontName: 'Icons',
			path: './images/icons/_icons.css',
			targetPath: '../css/icons.css',
			fontPath: '../fonts/'
		}))
		.pipe(iconfont({
			fontName: 'Icons',
			appendCodepoints: true,
			appendUnicode: false,
			normalize: true,
			fontHeight: 1000,
			centerHorizontally: true,
			formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'] // default, 'woff2' and 'svg' are available
		}))
		.pipe(gulp.dest('fonts/'))
		.pipe(browserSync.stream());
});


gulp.task('css', function () {
	var processors = [
		autoprefixer({
			browsers: ['> 1%', 'IE 9']
		})
	];
	return gulp.src(paths.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

gulp.task('css:minify', function () {
	return gulp.src(['css/**/*'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'));
});

gulp.task('html', function () {
	return gulp.src(paths.html)
		.pipe(browserSync.stream());
});

gulp.task('watch', function () {
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.icons, ['Iconfont']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scripts, ['scripts']);
	browserSync.init(paths.browserSyncOption);
});

gulp.task('init', ['scripts', 'Iconfont', 'css', 'images']);
gulp.task('default', ['watch']);
gulp.task('minify', ['css:minify']);