var gulp = require('gulp')
  , webpack = require('gulp-webpack')
  , connect = require('gulp-connect')
  , modRewrite = require('connect-modrewrite');

gulp.task('default', function() {
  return gulp.src('app/javascripts/app.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/'));
});

gulp.task('webserver', function() {
  connect.server({
    root: './dist'
  , port: 8000
  , middleware: function(connect, opt) {
     return [
        modRewrite([
          '^/api/(.*)$ http://localhost:3000/api/$1 [P]'
        ])
      ];
    }
  });
});
