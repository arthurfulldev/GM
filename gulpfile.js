let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let minifycss =require('gulp-minify-css');
let concatCss = require('gulp-concat-css');

let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('bootstrap-sass', function () {
  return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concatCss("bundle.min.css"))
    .pipe(minifycss())
    .pipe(gulp.dest('libs/bootstrap'));
});

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concatCss("mine.min.css"))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(concat("bundle.min.js"))  
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});