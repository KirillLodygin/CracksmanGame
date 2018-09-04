var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors'),
        app: path.join(__dirname, 'src', 'app')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
                path.resolve(__dirname, "src")
            ]
        }],
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|otf)$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./images/[name].[ext]"
            },
            {
                test: /\.jpg$/,
                loaders: [
                    "url-loader?limit=10000&mimetype=application/jpg&name=./images/[name].[ext]",
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.gif$/,
                loaders: [
                    "url-loader?limit=10000&mimetype=application/gif&name=./images/[name].[ext]",
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.png$/,
                loaders: [
                    "url-loader?limit=10000&mimetype=application/png&name=./images/[name].[ext]",
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.jpeg$/,
                loaders: [
                    "url-loader?limit=10000&mimetype=application/jpeg&name=./images/[name].[ext]",
                    "image-webpack-loader"
                ]
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.sass', '.css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        }),
        new CleanWebpackPlugin(['dist'])

    ]
};