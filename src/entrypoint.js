import React from 'react'
import ReactDOMServer from 'react-dom/server'

class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.name}!</div>;
    }
}

let test = <Hello name="World"/>;

let result = ReactDOMServer.renderToStaticMarkup(test);

console.log(result);