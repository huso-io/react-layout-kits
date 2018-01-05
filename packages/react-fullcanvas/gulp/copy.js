'use strict';

import gulp from 'gulp';
import config from 'config';

gulp.task('copy', () =>
  gulp.src(config.get('gulp.cssEntry'))
  .pipe(gulp.dest(config.get('gulp.output.dist')))
  .pipe(gulp.dest(config.get('gulp.output.es6')))
);
