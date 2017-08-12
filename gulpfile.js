var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Mr. Robot");
});

gulp.task('html', function() {
	console.log("The Crown");
});

gulp.task('styles', function() {
	console.log("Ghost in the Shell (2017)");
});


gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html')
	});


	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles')
	});

});