var gulp = require("gulp");

gulp.task('copyallfile',function(){
	gulp.src('./**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\day32test'));
});



