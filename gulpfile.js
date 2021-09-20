'use strict';
const {src,dest,series} = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const destino = "dist";

function cssminificar_css() {
    return src("./sass/**/*.scss")
            .pipe(sass())
            .pipe(cleanCSS())
            .pipe(rename('main.min.css'))
            .pipe(dest("./css"));
             // .pipe(dest("./public/css"));
}

function js(){
    return src("./js//*")
           .pipe(concat("main.min.js"))
           .pipe(uglify())
           .pipe(dest("./js"));
}

exports.cssmin = cssminificar_css;
exports.js = js;

//sass ./sass/index.scss ./css/main.css
//sass --watch --no-source-map ./sass/index.scss ./css/main.css

//gulp cssmin
//gulp js