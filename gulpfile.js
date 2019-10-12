const gulp=require("gulp");
const sass=require("gulp-sass");


gulp.task("copy",function(){
	return gulp.src("./**/*")
	.pipe(gulp.dest("D:\\phpstudy\\www\\coach"))
})
gulp.task("watchall",async()=>{
	gulp.watch("*html",async()=>{
		gulp.src("*html")
		.pipe(gulp.dest("D:\\phpstudy\\www\\coach"))
	})
	
	gulp.watch("sass/**/*",async()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpstudy\\www\\coach\\css"))
		.pipe(gulp.dest("css"))
	})
	
	gulp.watch("js/**/*",async()=>{
		gulp.src("js/**/*")
		.pipe(gulp.dest("D:\\phpstudy\\www\\coach\\js"))
	})
})

