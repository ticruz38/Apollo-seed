import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { match, StaticRouter } from 'react-router'
import * as express from 'express';
import webpack from 'webpack';

import renderer from './renderer';
import appConfig from 'config';

const favicon = require('serve-favicon')

const app = express()

const webpack = require('webpack')
const webpackConfig = require('webpack.config.js')
const webpackCompiler = webpack(webpackConfig)

app.use(
    require('webpack-dev-middleware')(webpackCompiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true,
        hot: true,
        inline: true,
        lazy: false,
        historyApiFallback: true,
        quiet: true
    })
)

app.use(require('webpack-hot-middleware')(webpackCompiler))

app.use(favicon('public/favicon.ico'))

app.use('/public', express.static('public'))

app.use(renderer);

app.listen(appConfig.port, appConfig.host, err => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Listening at http://${appConfig.host}:${appConfig.port}`)
    }
})
