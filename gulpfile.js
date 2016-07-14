var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./public')
    .pipe(server({
      host: '0.0.0.0',
      livereload: true,
      fallback: '/main.html',
      port: '3000',
      open: true
    }));
});
