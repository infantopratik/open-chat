var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		main: [
			'webpack-dev-server/client?http://localhost:8080',
      		'webpack/hot/only-dev-server',
			'./src/main.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		loaders: [
			{
	            test: /\.js?$/,
	            exclude: /node_modules/,
	            loader: ['react-hot-loader'],
	        },
			{
				test: /\.js?$/,
				include: path.join(__dirname, 'src'),
				loader: ['babel-loader']
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				loader: ['style-loader','css-loader','sass-loader']
			}
		]
	}
}