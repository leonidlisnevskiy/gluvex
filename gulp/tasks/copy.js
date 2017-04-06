var config = require('../config'),
	gulp = require('gulp'),
	cache = require('gulp-cache'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

gulp.task('copy', function() {
	gulp.src(config.src.img + '**/*.*') //find  img
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest(config.build.img)); //create "img" folder

	gulp.src(config.src.fonts + '*.*') //find fonts
		.pipe(gulp.dest(config.build.fonts)); //create "fonts" folder

	gulp.src(config.src.video + '*.*') //find video
		.pipe(gulp.dest(config.build.video)); //create "video" folder
});
