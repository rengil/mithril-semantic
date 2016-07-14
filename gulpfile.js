const gulp = require('gulp');
const server = require('gulp-server-livereload');
const browserify = require('gulp-browserify');
const runSequence = require('run-sequence');

gulp.task('browserify', function() {
  return gulp.src('./public/js/welcome.js')
    .pipe(browserify())
    .pipe(gulp.dest('dist/'));
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
  runSequence('copyMainHtml', 'browserify', 'webserver');
});
