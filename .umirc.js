var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// ref: https://umijs.org/config/
export default {
	
	chainWebpack(config){
		config.merge({
			module: {
				rules: [
				  {
					test: /\.(c|le)ss$/,
					exclude:/node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: 'less-loader' },
						{
							loader: 'css-loader',
						}
					]
				  }
				]
			},
			plugins:[
				new MiniCssExtractPlugin({
					filename: "[name].css",
					chunkFilename: "[id].css"
				}),
				new UglifyJsPlugin({
					cache: true,
					parallel: true,
					sourceMap: true // set to true if you want JS source maps
				}),
				new OptimizeCSSAssetsPlugin({})
			],
		})
				
	},
	publicPath:'./',
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: true,
			dynamicImport: true,
			title: 'coral-components',
			dll: true,
			routes: {
				exclude: [],
			},
			hardSource: false,
		}],
	],
	disableCSSModules:true,
	alias:{
		'coral-components':path.resolve(__dirname, 'components/'),
		'antd-components':path.resolve(__dirname, 'node_modules/antd/'),
	},
}
