const { src, dest, series, parallel, watch } = require('gulp')
const ts = require('gulp-typescript')
const del = require('del')
const sass = require('gulp-sass')

function clean() {
	return del('dist')
}

function js() {
	return src('src/**/*.ts')
		.pipe(ts({
			outFile: 'fb-uploader.js',
			module: 'commonjs'
		}))
		.pipe(dest('dist/js'))
}

function style() {
	return src('src/**/*.scss')
		.pipe(sass())
		.pipe(dest('dist/styles'))
}

function watcher() {
	watch('src/**/*.ts', { ignoreInitial: false }, js)
	watch('src/**/*.scss', { ignoreInitial: false }, style)
}

module.exports = {
	clean,
	js,
	style,
	default: series(clean, parallel(js, style)),
	watch: series(clean, watcher)
}