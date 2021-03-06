import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Hello from '../src/Hello.html.jsx'
import Greetings from '../src/Greetings.html.jsx'
import GreetingsFromAfar from '../src/GreetingsFromAfar.html.jsx'

it('should render a hello world div', () => {
    let test = <Hello name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Hello World!</div>")
});

it('should render a higher order stateless component', () => {
    let test = <Greetings name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Some greetings: <div>Hello World!</div><div>Hola World!</div></div>")
});

it('should render a higher order stateless component with loading from different folder', () => {
    let test = <GreetingsFromAfar name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Some greetings:" +
        "<div>Hello World!</div>" +
        "<div>Hola World!</div>" +
        "<div>Konnichiwa World!</div>" +
        "</div>")
});