var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('default', function() {
  gulp.watch('assets/sass/*.*', ['viewSeq']);
});

gulp.task('css', function() {
  return gulp.src('assets/sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12'
      ],
      cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/*.*', ['viewSeq']);
});

gulp.task('viewSeq', function(callback) {
  gulpSequence('css')(callback)
});
