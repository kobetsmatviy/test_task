const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');

function style() {
    return gulp.src('./less/*.less')
                .pipe(less())
                .pipe(gulp.dest('./css'))
}

exports.style = style;