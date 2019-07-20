const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

const css = {
  src: './src/scss/*.scss',
  watch: './src/scss/**/*',
  buildMin: '../html/wp-content/themes/bayder-school/',
  build: './build/',
  sassOpts: {
    outputStyle     : 'nested',
    precision       : 3,
    errLogToConsole : true
  },
  processors: [ require('cssnano') ]
};

const scss = () => src(css.src)
                    .pipe(sass(css.sassOpts))
                    .pipe(dest(css.build))
                    .pipe(postcss(css.processors))
                    .pipe(dest(css.buildMin));

exports.default = () => watch(css.watch, scss);