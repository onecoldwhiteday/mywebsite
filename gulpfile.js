var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    port: 3106,
    open: true,
    livereload: true,
  });
});

gulp.task('default', ['connect']);