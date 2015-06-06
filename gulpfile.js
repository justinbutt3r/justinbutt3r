// Gulp dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('./utils/browserify.js'); 
var sass = require('./utils/sass.js');

var DEFAULT_OPTIONS = {
  browserify: {
    src: './app/main.js',
    isTest: false,
    dest: './dev/',
    watch: true,
    uglify: false
  },
  sass: {
    src: './sass/*.scss',
    dest: './dev/',
    watch: true
  }
};

gulp.task('browserify', function () {
  return browserify(DEFAULT_OPTIONS.browserify);
});

gulp.task('sass', function () {
  return sass(DEFAULT_OPTIONS.sass);
});

gulp.task('default', ['browserify', 'sass']);

gulp.task('deploy', function () {
  DEFAULT_OPTIONS.browserify.dest = './dist/';
  DEFAULT_OPTIONS.browserify.watch = false;
  DEFAULT_OPTIONS.browserify.uglify = true;
  browserify(DEFAULT_OPTIONS.browserify);

  DEFAULT_OPTIONS.sass.dest = './dist/';
  DEFAULT_OPTIONS.sass.watch = false;
  sass(DEFAULT_OPTIONS.sass);
});

gulp.task('test', function () {
    var src = '.' + gutil.env[''][''];
    DEFAULT_OPTIONS.browserify.src = src;
    DEFAULT_OPTIONS.browserify.isTest = true;
    return browserify(DEFAULT_OPTIONS.browserify);
});