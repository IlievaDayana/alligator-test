const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new SentryWebpackPlugin({
                authToken: 'f8c5ed24bd95480da12000604c281752dab64e7f386441e881d7f06b9fd6bb42',
                org: 'abb-tf',
                project: 'test_sentry',
                release: 'test_sentry@0.3.0',
                include: './dist',
                ignoreFile: ".sentryclirc",
                ignore: ['node_modules', 'vue.config.js'],
            }),
        ]
    },
    productionSourceMap: true,
};