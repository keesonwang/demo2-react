const path = require('path');

module.exports = {
  
  entry: "./app/main.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "all.js", // string

  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/ ,
            use: {
                loader: 'babel-loader',
                options: {
                      presets: ['es2015',react]
                }
            }
        }
    ]
}
}