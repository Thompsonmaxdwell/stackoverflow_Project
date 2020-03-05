// configure webpack

const path =  require('path');

module.exports = {
    mode : 'development',
    entry : "./src/stackoverflow/index.js",

    output: {
        path: path.resolve(__dirname, 'lib/js'),
        filename : "bundle.js"
    

    }
}