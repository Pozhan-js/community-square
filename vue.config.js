/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-20 10:47:04
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-19 15:57:24
 * @FilePath: /community-square/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                ROUTES: webpack.DefinePlugin.runtimeValue(() => {
                    const tfPages = new TransformPages({ includes: ['path', 'name', 'meta','aliasPath'] })
                    return JSON.stringify(tfPages.routes)
                }, true)
            })
        ]
    }
    
}