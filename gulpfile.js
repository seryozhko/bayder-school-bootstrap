const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

function scss() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'));
}

exports.default = function() {
  watch('src/scss/*.scss', scss);
}