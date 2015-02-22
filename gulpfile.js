var gulp = require('gulp'),
    runSequence = require('run-sequence'),    // Temporary solution until gulp 4// https://github.com/gulpjs/gulp/issues/355
    watch = require('gulp-watch');

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------


gulp.task('copy', [
    'copy:js',
    'copy:css',
    'copy:fonts',
    'copy:custom',
    'copy:html'
]);

gulp.task('copy:js', function () {
    gulp.src([
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/angular/angular.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "node_modules/modernizr/dist/modernizr-build.min.js"
    ])
        .pipe(gulp.dest("dist/assets/js"))
        .pipe(gulp.dest("src/assets/js"));
});

gulp.task('copy:css', function () {

    gulp.src([
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "bower_components/fontawesome/css/font-awesome.min.css",
        "bower_components/animate-css/animate.min.css",
    ])
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(gulp.dest("src/assets/css"));

});
gulp.task('copy:fonts', function () {

    gulp.src([
        'bower_components/fontawesome/fonts/**/*'
    ])
        .pipe(gulp.dest("dist/assets/fonts"));

});

gulp.task('copy:custom', function () {

    gulp.src([
        "src/assets/css/custom.css"
    ])
        .pipe(gulp.dest("dist/assets/css"));

});
gulp.task('copy:html', function () {

    gulp.src([
        "src/index.html"
    ])
        .pipe(gulp.dest("dist"));

});
gulp.task('copy:app', function () {

    gulp.src([
        "src/app/*.js"
    ])
        .pipe(gulp.dest("dist/app"));

});

// ---------------------------------------------------------------------
// | WATCH                                                             |
// ---------------------------------------------------------------------
gulp.task('watch',function(){

    //gulp.src("src/*.html")
    //    .pipe(watch('src/*.html'))
    //    .pipe(gulp.dest("dist"));

    gulp.watch("src/*.html", ['copy:html']);
    gulp.watch("src/app/*.js", ['copy:app']);
    gulp.watch("src/assets/css/custom.css", ['copy:custom']);


    gulp.src([
        "src/app/**/*"
    ])
        .pipe(watch("src/app/**/*"))
        .pipe(gulp.dest("dist/app"));
});

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('build', function (done) {
    runSequence('copy', done);
});

gulp.task('default', ['build']);
