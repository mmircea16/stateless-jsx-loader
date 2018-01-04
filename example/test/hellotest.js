import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from '../src/Hello.html.jsx'

it('Should render a hello world div', () => {
    let test = <Hello name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Hello World!</div>")
});