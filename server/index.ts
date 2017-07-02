import'module-alias/register'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import * as express from 'express'
import * as bodyParser from 'body-parser'

const webpack = require('webpack')

const webpackConfig = require('../webpack.config.js')
const webpackCompiler = webpack(webpackConfig)


import renderer from './renderer'
import appConfig from 'config'

const favicon = require('serve-favicon')

const app = express()
app.use(bodyParser.json())
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

app.get('*', renderer )

app.listen( appConfig.PORT, appConfig.HOST, err => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Listening at http://${appConfig.HOST}:${appConfig.PORT}`)
    }
})
