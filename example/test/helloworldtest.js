import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hey from '../src/Hey.html.jsx'

it('Should render a hello world div', () => {
    let test = <Hey name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Hello World!</div>")
});