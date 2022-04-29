const gulp = require('gulp');
const replace = require('gulp-replace');
const sassInlineSvg = require('gulp-sass-inline-svg');
const svgmin = require('gulp-svgmin');

/* svgs */
gulp.task('sass:svgs', function () {
  return gulp
    .src('src/svgs/*.svg', {allowEmpty:true})
    .pipe(svgmin())
    .pipe(
      sassInlineSvg({
        destDir: 'src/styles/@sprites/',
      }),
    )
    .pipe(gulp.src('src/styles/@sprites/' + '_sass-inline-svgs.scss', {allowEmpty:true}))
    .pipe(replace('call($functionname', 'call(get-function($functionname)'))
    .pipe(gulp.dest('src/styles/@sprites/'));
});

gulp.task('watch', function () {
  gulp.watch('src/svgs/*.svg', gulp.series('sass:svgs'));
});

gulp.task('dev', gulp.series('sass:svgs', 'watch'), function () {});
gulp.task('build', gulp.series('sass:svgs'), function () {});
