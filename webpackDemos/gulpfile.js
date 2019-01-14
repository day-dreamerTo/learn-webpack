const gulp = require('gulp')
const minimist = require('minimist')

// 自动生成文件 gulp generate --dirName=
gulp.task('generate', function () {
	var doc = {
		string: 'dirName',
		default: {
			dirName: 'webpackExample'
		}
	}
	var options = minimist(process.argv.slice(2), doc)
	// console.log(options)
	gulp.src('./tpl/**/*')
		.pipe(gulp.dest(`./${options.dirName}`))
})