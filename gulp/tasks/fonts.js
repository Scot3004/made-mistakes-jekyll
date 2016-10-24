'use strict';
var gulp = require('gulp');
var size = require('gulp-size');

// 'gulp fonts' -- copies fonts to temporary assets directory
gulp.task('fonts', () =>
  gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('.tmp/assets/fonts'))
    .pipe(size({title: 'fonts'}))
);
