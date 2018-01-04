import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from './Hello.html.jsx'

let test = <Hello name="World"/>;

let result = ReactDOMServer.renderToStaticMarkup(test);

console.log(result);