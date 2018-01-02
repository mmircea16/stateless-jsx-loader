import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Hey} from './Hey.html.jsx'

let test = <Hey name="World"/>;

let result = ReactDOMServer.renderToStaticMarkup(test);

console.log(result);