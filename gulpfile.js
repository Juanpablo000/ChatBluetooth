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
             .pipe(dest(`./${destino}/css`));
}

function js(){
    return src("./js//*")
           .pipe(concat("main.min.js"))
           .pipe(uglify())
           .pipe(dest(`./${destino}/js/`));
}

function mover_css(){
    return src('./css/**/*')
    .pipe(dest(`./${destino}/css`));
}

function mover_js(){
    return src('./js/**/*')
    .pipe(dest(`./${destino}/js`));
}

exports.cssmin = cssminificar_css;
exports.js = js;

exports.release = series(cssminificar_css,js,mover_css,mover_js);
exports.build = series(cssminificar_css,js,mover_css,mover_js);


//gulp cssmin
//gulp js
