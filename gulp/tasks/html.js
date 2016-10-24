'use strict';
var argv       = require('yargs').argv;
var gulp       = require('gulp');
var gzip       = require('gulp-gzip');
var htmlmin    = require('gulp-htmlmin');
var prettyData = require('gulp-pretty-data');
var size       = require('gulp-size');
var when       = require('gulp-if');

// 'gulp html' -- does nothing
// 'gulp html --prod' -- minifies and gzips HTML files for production
gulp.task('html', () =>
  gulp.src('dist/**/*.html')
    .pipe(when(argv.prod, htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: false,
      removeAttributeQuotes: false,
      removeRedundantAttributes: false,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized HTML'})))
    .pipe(when(argv.prod, gulp.dest('dist')))
    .pipe(when(argv.prod, gzip({append: true})))
    .pipe(when(argv.prod, size({
      title: 'gzipped HTML',
      gzip: true
    })))
    .pipe(when(argv.prod, gulp.dest('dist')))
);

// 'gulp xml' -- does nothing
// 'gulp xml' --prod'  -- minifies XML and JSON files for production
gulp.task('xml', () =>
  gulp.src('dist/**.{xml,json}')
    .pipe(when(argv.prod, prettyData({
      type: 'minify',
      preserveComments: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized XML'})))
    .pipe(when(argv.prod, gulp.dest('dist')))
);
