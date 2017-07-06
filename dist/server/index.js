"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require('es6-promise').polyfill();
require('isomorphic-fetch');
const express = require("express");
const bodyParser = require("body-parser");
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackCompiler = webpack(webpackConfig);
const renderer_1 = require("./renderer");
const config_1 = require("config");
const favicon = require('serve-favicon');
const app = express();
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    quiet: true
}));
app.use(require('webpack-hot-middleware')(webpackCompiler));
app.use(favicon('public/favicon.ico'));
app.use('/public', express.static('public'));
app.get('*', renderer_1.default);
app.listen(config_1.default.PORT, config_1.default.HOST, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`Listening at http://${config_1.default.HOST}:${config_1.default.PORT}`);
    }
});
//# sourceMappingURL=index.js.map