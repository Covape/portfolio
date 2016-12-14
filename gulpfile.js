var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass')
// to da sass


gulp.task('jshint',function(){
  return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
gulp.task('sass',function(){
  return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
})

gulp.task('watch',function(){
  gulp.watch('scss/*.scss',['sass']);
})
