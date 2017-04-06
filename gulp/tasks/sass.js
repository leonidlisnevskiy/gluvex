var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
notify = require("gulp-notify"),
config = require('../config');

gulp.task('sass', function () {

	sass([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'], {
		noCache: true,
	})

	.on('error', notify.onError({
		title: 'Sass Error!',
		message: '<%= error.message %>'
	}))

	.pipe(autoprefixer({
		browsers: ['last 2 versions', ],
		cascade: false
	}))
	.pipe(cleanCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(config.build.css))
	.pipe(notify({
		message: "<%= file.relative %> ready",
		sound: true
	}))
});

