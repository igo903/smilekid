var
	gulp = require('gulp'),
	includeTag = require('gulp-include-tag'),
	prettify = require('gulp-prettify'),
	replace = require('gulp-replace'),
	cleanCss = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	myth = require('gulp-myth');

const
	SRC_PATH = 'src/',
	SRC_HTML_PATH = SRC_PATH + '*.html',
	SRC_TEMPLATE_PATH = SRC_PATH + 'template/*.html',
	SRC_CSS_PATH = SRC_PATH + '**/*.css',
	SRC_JS_PATH = SRC_PATH + '**/*.js',
	SRC_IMG_PATH = SRC_PATH + '**/*.*(png|jpg|jpeg|gif)',
	BUILD_PATH = './';

gulp.task('default', ['html', 'css', 'js', 'img']);

gulp.task('html', function () {
	return gulp.src(SRC_HTML_PATH)
		.pipe(includeTag())
		.pipe(replace('"../', '"'))
		.pipe(prettify({
			indent_with_tabs: true,
			preserve_newlines: true,
			extra_liners: []
		}))
		.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('css', function () {
	return gulp.src(SRC_CSS_PATH)
		.pipe(myth())
		.pipe(cleanCss())
		.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('img', function () {
	return gulp.src(SRC_IMG_PATH)
		.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('js', function () {
	return gulp.src(SRC_JS_PATH)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('watch', ['default'], function () {
	gulp.watch([SRC_HTML_PATH, SRC_TEMPLATE_PATH], ['html']);
	gulp.watch(SRC_CSS_PATH, ['css']);
	gulp.watch(SRC_JS_PATH, ['js']);
	gulp.watch(SRC_IMG_PATH, ['img']);
});