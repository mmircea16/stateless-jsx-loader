## React stateless component loader

This gives the ability to write pure JSX for stateless components, eliminating all the boilerplate needed to write one. Only writing JSX in a file like below is enough to define a stateless component:

```
<div> Hello {this.props.name}! </div>
``` 

Using the `.html.jsx` extension can be a way to highlight the files containing stateless components written in pure JSX

See `example` folder and `webpack.config.js` in that folder for an example of usage. 