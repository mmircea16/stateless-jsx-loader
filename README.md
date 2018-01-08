## React stateless component loader

This gives the ability to write pure JSX for stateless components, eliminating all the boilerplate needed to write one. Only writing JSX in a file like below is enough to define a stateless component:

```
<div> Hello {this.props.name}! </div>
``` 

Using the `.html.jsx` extension can be a way to highlight the files containing stateless components written in pure JSX

See `example` folder and `webpack.config.js` in that folder for an example of usage. 

### Instalation

```bash
npm install stateless-jsx-loader
```

### Usage

Webpack config needs to contain something like:
```javascript
{
    test: /\.html\.jsx$/,
    use: {
          loader: 'stateless-jsx-loader'
    }
}
```

### Testing when using the loader

In order to write tests, webpack loaders need to apply to the code. An example of how to do it:
```shell
"test": "webpack --config webpack.test.config.js && jest"
``` 

and webpack.test.config.js
```javascript
const glob_entries = require('webpack-glob-entries');
const path = require('path');

const webpack = require('./webpack.config');

webpack.entry = glob_entries('./test/*test.js');
webpack.output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/test')
};

module.exports = webpack;
```