"use scrict";

var gulp=require('gulp'),
    connect = require('gulp-connect'),
    opn=require('opn');
//server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port:8880
  });
  opn('http://localhost:8880');
});

gulp.task('default', ['connect']);