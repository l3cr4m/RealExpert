var gulp = require('gulp');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var cssnext = require('postcss-cssnext');
var present = require('postcss-preset-env');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');

gulp.task('styles', function() {
  var processors = [
      rucksack(),
      autoprefixer({grid: true, browsers: ['last 2 versions', 'ie 11', '<1%']}),
      present({})
  ];

  return gulp.src('./sass/styles.scss')
    .pipe(plumber())
    .pipe(sass({
      style: 'Expanded'
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('watch:styles', function(){

  var server = livereload();

  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['watch:styles']);
