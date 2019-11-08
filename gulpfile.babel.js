import gulp from "gulp";
import sass from "gulp-sass";
import browserify from "gulp-browserify";
import autoPrefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import babelify from "babelify";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss"
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js"
  }
};

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoPrefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));
};
export const js = () => {
  return gulp
    .src(paths.js.src)
    .pipe(
      browserify({
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"]
          })
        ]
      })
    )
    .pipe(gulp.dest(paths.js.dest));
};
const clean = () => del(["src/static"]);
const watchFiles = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};
const dev = gulp.series(clean, styles, js, watchFiles);

export default dev;
