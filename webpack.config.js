const path = require('path');
const webpack = require('webpack');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:
		//'./app/app.js',
		{
		main: './app/app.js',
		vendor: './app/vendor.js'
	},
	
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'/*,
		publicPath: '/dist'*/
	},
	module: {
		rules: [
		{
			test: /\.css/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		}
		]
	},
	plugins: [
		new uglifyJSPlugin({
		    uglifyOptions: {
		      mangle: false      
		    }
  		}),
		new HtmlWebpackPlugin({
			template:'index.html',
			inject: 'body'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor'
		})
	],
	watch: true
};