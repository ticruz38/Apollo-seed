import'module-alias/register'
require('es6-promise').polyfill();
require('isomorphic-fetch');

// modules
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as favicon from 'serve-favicon'

// app
import renderer from './renderer'
import appConfig from 'config'

// webpackcompiler
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const webpackCompiler = webpack(webpackConfig)




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
