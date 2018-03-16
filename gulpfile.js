'use strict';
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  sourcemaps = require('gulp-sourcemaps');

const doCompress = true;

gulp.task('style', () => {
  const sassOpts = {};

  if (doCompress) {
    sassOpts.outputStyle = 'compressed';
  }

  return gulp.src('src/**/*.css')
    .pipe(plumber())
    .pipe(newer('public'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('js', [], () => {
  return gulp.src('src/carousel.js')
    .pipe(plumber())
    .pipe(newer('public'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'));
});

gulp.task('site-js', [], () => {
  return gulp.src(['site/src/*.js'])
    .pipe(plumber())
    .pipe(newer('site/build'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      babelrc: true,
      presets: ["es2015", "stage-0"],
      plugins: [
        'syntax-async-functions',
        'transform-regenerator'
      ]
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('site/build'));
});

gulp.task('site-style', () => {
  const sassOpts = {};

  if (doCompress) {
    sassOpts.outputStyle = 'compressed';
  }

  return gulp.src('site/src/*.css')
    .pipe(plumber())
    .pipe(newer('site/build'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('site/build'));
});


gulp.task('watch', ['default'], () => {
  gulp.watch('src/**/*.css', ['style']);
  gulp.watch('src/carousel.js', ['js']);
  gulp.watch('site/src/*.js', ['site-js']);
  gulp.watch('site/src/*.scss', ['site-style']);
});

gulp.task('default', ['style', 'js', 'site-style', 'site-js']);
