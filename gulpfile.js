'use strict';
const
  gulp       = require('gulp'),
  sass       = require('gulp-sass'),
  plumber    = require('gulp-plumber'),
  newer      = require('gulp-newer'),
  rename     = require('gulp-rename');

const doCompress = true;

gulp.task('sass', () => {
  const sassOpts = {};

  if (doCompress) {
    sassOpts.outputStyle = 'compressed';
  }

  return gulp.src('src/*.scss')
    .pipe(plumber())
    .pipe(newer('public'))
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public'));
});


gulp.task('watch', [ 'default' ], () => {
  gulp.watch('src/*.scss', [ 'sass' ]);
});

gulp.task('default', ['sass']);
