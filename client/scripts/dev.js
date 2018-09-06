const config = require('../config/webpack.config.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const childProcess = require('child_process')

const serverConfig = {
        // contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        // stats : "errors-only",
        open: true,
        proxy: {
            '/api': 'http://localhost:5000'
          }
      };
const devServer = new WebpackDevServer(webpack(config), serverConfig )


devServer.listen(serverConfig.port, 'localhost', function (error) {

    if(error) {
        return console.log(error)
    }
    else {
        console.log(`Electron app started`)
        childProcess.exec('npm run electron-app', (err) => {
            if(err) {
                console.log(err)
            }

            else {
              
            }
        })
       
    }
})