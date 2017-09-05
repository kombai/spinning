var electron = require('electron-connect').server.create();
var gulp = require('gulp');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');


gulp.task('webpack', function () {

    gulp.src('./source/display/router/index.js')
    .pipe(webpack({
        output: {
    		filename: 'bundle.js'
    	},
        module: {
    		loaders: [{
				exclude: /node_modules/,
                test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
    		}]
    	}
    }))
    .pipe(gulp.dest('./public/js'));
});


gulp.task('css', function() {

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './source/**/**/**/*.css'
    ])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./public/style'));
});


gulp.task('font', function() {

    gulp.src([
        './node_modules/bootstrap/dist/fonts/*'
    ])
    .pipe(gulp.dest('./public/fonts'));
});


gulp.task('default', ['css', 'font', 'webpack'], function () {

	electron.start();

	gulp.watch('./source/display/**/**/**/*.css', ['css']);

	gulp.watch('./source/display/**/**/**/*.js', ['webpack']);

});
