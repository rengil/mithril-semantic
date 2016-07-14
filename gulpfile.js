const gulp = require('gulp');
const server = require('gulp-server-livereload');
const browserify = require('gulp-browserify');
const runSequence = require('run-sequence');
const msx = require('gulp-msx');
const del = require('del');
const symlink = require('gulp-sym');
const less = require('gulp-less');

gulp.task('js', function (){
  return gulp.src('public/js/**/*.js')
  .pipe(msx({harmony: true}))
  .pipe(gulp.dest('public/temp/'));
});

gulp.task('css', function (){
  return gulp.src('public/css/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function() {
  return gulp.src('./public/temp/welcome.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('deleteTempFiles', function () {
  del(['public/temp/']);
});

gulp.task('copyMainHtml', function() {
  return gulp.src('./public/html/main.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(server({
      host: '0.0.0.0',
      livereload: true,
      fallback: 'main.html',
      port: '3000',
      open: true
    }));
});

gulp.task('semantic-themes', function () {
  return gulp.src('./node_modules/semantic-ui-less/themes/**')
  .pipe(gulp.dest('public/themes'));
});


gulp.task('remove-semantic-configurable', function () {
  del(['node_modules/semantic-ui-less/theme.config', 'node_modules/semantic-ui-less/site']);
});

gulp.task('get-configurable-semantic', function () {
  gulp.src(['public/css//theme.config', 'lib/css//site'])
    .pipe(symlink(['node_modules/semantic-ui-less/theme.config',
                   'node_modules/semantic-ui-less/site']));
});

gulp.task('default', function () {
  runSequence('copyMainHtml', 'js' , 'browserify', 'deleteTempFiles' , 'webserver');
  runSequence('semantic-themes', 'remove-semantic-configurable' , 'get-configurable-semantic', 'css');
});
