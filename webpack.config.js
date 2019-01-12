const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = env => {

	console.log('Environment: ', env.type);	
	
	return {
	  module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	        },
	      },
	      {
	        test: /\.html$/,
	        use: [
	          {
	            loader: 'html-loader',
	            options: { minimize: true },
	          },
	        ],
	      },
	    ],
	  },
	  plugins: [
	    new HtmlWebPackPlugin({
	      template: './src/index.html',
	      filename: './index.html',
	    }),

			new webpack.DefinePlugin({
			  'ENV_TYPE': JSON.stringify(env.type),
			})
			
	  ],
	}
	

};
