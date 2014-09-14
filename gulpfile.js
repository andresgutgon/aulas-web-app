var gulp = require('gulp')
  , watch = require('gulp-watch')
  , webpack = require('gulp-webpack')
  , connect = require('gulp-connect')
  , sass = require('gulp-sass')
  , clean = require('gulp-clean')
  , processhtml = require('gulp-processhtml')
  , autoprefixer = require('gulp-autoprefixer')
  , minifycss = require('gulp-minify-css')
  , rename = require('gulp-rename')
  , modRewrite = require('connect-modrewrite')
  , notify = require("gulp-notify")
  , bases
  , paths;

bases = {
 app: 'app/',
 dist: 'dist/',
};

paths = {
  html: ['app/index.html']
};

/**
 * Manipulate Sass files to generate css
 */
gulp.task('styles', function() {
  return gulp.src('app/stylesheets/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 6', 'ie 10', 'opera 12.1'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Use webpack to generate JS code
 */
gulp.task('webpack', function() {
  return gulp.src('app/javascripts/**/*.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/'));
});

/**
 * Clean dist directory. read: false make this task faster
 */
gulp.task('clean', function () {
  return gulp.src(bases.dist, {read: false})
  .pipe(clean());
});

/**
 * Process index file
 */
gulp.task('process_html', ['clean'], function () {
  gulp.src('./app/index.html')
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest(bases.dist));
});

/**
 * Notify when a process finish
 */
gulp.task('notify', function () {
  gulp.src('app/index.html')
  .pipe(notify({message: 'Go for it!'}));
});

/**
 * Copy index file to dist directory
 */
gulp.task('copy', ['clean'], function() {
 gulp.src('index.html', {cwd: bases.app})
 .pipe(gulp.dest(bases.dist));
});

/**
 * Development server with API proxy
 */
gulp.task('webserver', function() {
  connect.server({
    root: bases.dist
  , port: 8000
  , fallback: 'dist/index.html'
  , middleware: function(connect, opt) {
     return [
        modRewrite([
          '^/api/(.*)$ http://localhost:3000/api/$1 [P]'
        ])
      ];
    }
  });
});

/**
 * Watch for changes on js/sass
 */
gulp.task('watch', function() {
  gulp.watch('./app/stylesheets/**/*.scss', ['styles', 'notify']);
  gulp.watch('./app/javascripts/**/*.js', ['webpack', 'notify']);
});

gulp.task('default', ['process_html', 'styles', 'webpack', 'webserver', 'notify', 'watch']);
