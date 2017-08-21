const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "./css/[name].css",
    //disable: process.env.NODE_ENV === "development"
});


module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: './js/main.js',


	output: {
		filename: './js/main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: process.env.NODE_ENV === "production" ? 'http://piliado.com/' : '/'
	},


	devtool: "eval-source-map",

	module: {
	    rules: [{
	        test: /\.css$/,
        	use: ExtractTextPlugin.extract({
        		use: 'css-loader',
        	})
	    },
	    {
	        test: /\.scss$/,
        	use: extractSass.extract({
        		use:[{
	                loader: "css-loader",
	                options: {
	                    sourceMap: true
	                }
        		}, {
	                loader: "sass-loader",
	                options: {
	                    sourceMap: true
	                }
	            }],
	            fallback: "style-loader"
            })
	    },

	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env']
	        }
	      }
	    },

	    {
	    	test: /\.(jpe?g|png|gif|ico|svg)$/, 
			use: 'file-loader?name=[path][name].[ext]'
		},

        {
           test: /\.(eot|ttf|woff|woff2)$/,
           loader: 'file-loader?name=[path][name].[ext]'
        },

		{
	    	test: /\.html$/, 
			use: [{
				loader: 'html-loader'
			}]
		}]
	},


	plugins: [
  		//new ExtractTextPlugin('css/[name].css'),
  		extractSass,
  		new HtmlWebpackPlugin({template: './index.html'})
	]
}


