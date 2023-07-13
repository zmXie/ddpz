const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    lintOnSave: false,
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    publicPath: './',
    devServer: {
        port: 9099,
        hot: true,
        disableHostCheck: true
    },
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            });
        // 生产环境
        if (process.env.NODE_ENV === 'production') {
            // js\css压缩
            config.plugin('compressionPlugin').use(
                new CompressionPlugin({
                    test: /\.(js|css|less|scss)$/, // 匹配文件名
                    threshold: 102400, // 对超过10k的数据压缩
                    minRatio: 0.8,
                    deleteOriginalAssets: false // 删除源文件
                })
            );
            // 合并chunk，减少chunk的http请求次数
            config.plugin('limitChunkCountPlugin').use(
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 15,
                    minChunkSize: 100
                })
            );
        }
    },
    // 不输出 map 文件
    productionSourceMap: false
}
