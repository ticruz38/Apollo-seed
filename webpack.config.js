var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./index.ts'],
        vendors: ['redux', 'react', 'react-dom', 'react-router', 'moment']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "http://localhost:8080/",
        hot: true
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    target: "web",

    resolve: {
        alias: {
            app: path.resolve('./app'),
            utils: path.resolve('./utils'),
            public: path.resolve('./public'),
            dist: path.resolve('./dist'),
            components: path.resolve('./components'),
            models: path.resolve('./models')
        },
        modules: ["node_modules"],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?|ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss|sass|css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff|ttf)$/i,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity,
            filename: '[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            title: "Apollo",
            template: "index.html"
        })
    ]
}
