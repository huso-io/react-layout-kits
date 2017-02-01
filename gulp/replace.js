'use strict';

import gulp from 'gulp';
import replace from 'gulp-replace';
import config from 'config';
import mergeStream from 'merge-stream'

gulp.task('replace', () => {
  let strm1 = gulp
              .src(config.get('gulp.output.dist') + '*.js')
              .pipe(replace('../../../packages/', '../packages/'))
              .pipe(gulp.dest(config.get('gulp.output.dist')))

  let strm2 = gulp
              .src(config.get('gulp.output.es6') + '*.js')
              .pipe(replace('../../../packages/', '../../packages/'))
              .pipe(gulp.dest(config.get('gulp.output.es6')))

  return mergeStream(strm1, strm2);
});
