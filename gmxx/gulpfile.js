var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');

gulp.task('img', function () {
    return gulp.src('./img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('less', function () {
    gulp.src('./less/*.less')
        .pipe(less())
        .on('error', function(e){console.log(e)})
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['img', 'less']);

