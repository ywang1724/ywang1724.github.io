var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var ejs = require("gulp-ejs");

gulp.task('img', function() {
    return gulp.src('./img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .on('error', function(e) {
            console.log(e)
        })
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('ejs', function() {
    gulp.src("./ejs/*.ejs")
        .pipe(ejs({
            msg: "Hello Gulp!"
        }))
        .pipe(gulp.dest("./dist/html/"));
});

gulp.task('default', ['less', 'ejs']);
