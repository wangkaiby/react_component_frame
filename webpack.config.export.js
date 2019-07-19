const path = require('path')

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'coral-components': './components/index.js',
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, './export/'),
        // filename: '[name].js',
        library: 'coralComponents',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'coral-components': path.resolve(__dirname, 'components/'),
            'antd-components': path.resolve(__dirname, 'node_modules/antd/'),
            // 'buildo-react-components': path.resolve(__dirname, 'node_modules/buildo-react-components/'),
        }
    },
    externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.(c|le)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            // publicPath: '../'
                        }
                    },
                    // 'style-loader', 
					{
						loader: 'css-loader', 
						options: {
						  sourceMap: true
						}
					},
					{
						loader: 'less-loader', 
						options: {
							sourceMap: true
						}
					}
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
			new OptimizeCSSAssetsPlugin({}),
			new CleanWebpackPlugin('export/*.*', {
				root: __dirname,
				verbose: true,
				dry: false
			})
        ]
    }
}