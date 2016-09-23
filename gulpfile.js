const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const page = require('gulp-gh-pages');

const config = require('./webpack.config');
const componentsConfig = require('./webpack.config.components');

const buildDir = './dist';

gulp.task('clean', () => del([
  `${buildDir}/**/*`,
  './components/**/*',
]));

gulp.task('build', ['clean'], () => {
  return gulp.src('./src/index.js')
  .pipe(webpack(config))
  .pipe(gulp.dest(buildDir));
});

gulp.task('components', ['clean'], () => {
  return gulp.src('./src/commponents/*.js')
  .pipe(webpack(componentsConfig))
  .pipe(gulp.dest('./components'));
});

gulp.task('deploy', ['build'], () => {
  return gulp.src(`${buildDir}/**/*`)
  .pipe(page());
});
