const gulp = require('gulp');
const server = require('gulp-server-livereload');
const browserify = require('gulp-browserify');
const runSequence = require('run-sequence');
const msx = require('gulp-msx');
const del = require('del');

gulp.task('js', function (){
  return gulp.src('public/js/**/*.js')
  .pipe(msx({harmony: true}))
  .pipe(gulp.dest('public/temp/'));
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

gulp.task('default', function () {
  runSequence('copyMainHtml', 'js' , 'browserify', 'deleteTempFiles' , 'webserver');
});
