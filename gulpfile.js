const { src, dest, series, parallel, watch } = require('gulp')
const minify = require('gulp-minify')
const del = require('del')
const sass = require('gulp-sass')

function clean() {
	return del('dist')
}

function js() {
	return src('src/**/*.js')
		.pipe(minify())
		.pipe(dest('dist'))
}

function style() {
	return src('src/**/*.scss')
		.pipe(sass())
		.pipe(dest('dist/styles'))
}

function watcher() {
	watch('src/**/*.js', { ignoreInitial: false }, js)
	watch('src/**/*.scss', { ignoreInitial: false }, style)
}

module.exports = {
	clean,
	js,
	style,
	default: series(clean, parallel(js, style)),
	watch: series(clean, watcher)
}