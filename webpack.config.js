const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {

  entry:'./src/index.ts',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    environment:{
      arrowFunction:false,
      const:false
    }
  },
  //指定打包时要使用的模块
  module:{
    rules:[
      {
        test: /\.ts$/,
        use:[

          {
            loader:'babel-loader',
            options:{
              //设置预定义环境
              presets:[
                [
                  //指定环境的插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets:{
                      'chrome':'88',

                    }, 
                    //指定corejs的 版本
                    'corejs':'3',
                    'useBuiltIns':'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        //排除文件
        exclude:/node_modules/
      },
      {
        test:/.less$/,
        use:[
          'style-loader',
          'css-loader',
          //引入postcss
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]

  },
  plugins:[
    new HtmlWebpackPlugin({
      // title:'这是自定义标题'
      template:'./src/index.html'
    }),
    //清空dist目录下的文件重新编译文件
    new CleanWebpackPlugin(),
  ],
  //设置引用模块
  resolve: {
    extensions:['.ts','.js']
  }
}