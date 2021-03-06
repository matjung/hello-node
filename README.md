[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
## &lt;hello-node&gt;&lt;/hello-node&gt;

````
hello-node displays as <h1>Hello Node</h1> when your browser supports customized html elements.
````

### Global Usage
````
<html>
<script type='module' src='https://raw.githubusercontent.com/matjung/hello-node/master/hello-node.js'></script>
<hello-node></hello-node></html>
( not all browsers support downloading from githubusercontent )
````

### Local Installation

npm install @matjung/hello-node
( you need to be in a valid npm folder before you install that package )
( Remember: npm init )

### Demo page
https://repl.it/@matjung/DryEllipticalProcedures#index.html

### Package 1.0.1
https://www.npmjs.com/package/@matjung/hello-node

### Known Issues / TODO
Make the package compatible with runkit

Currently hello-node is a front end component, not a back end component. This means that 

var helloNode = require("@matjung/hello-node")

is not going to work - but it may download the code from npmjs to your development environment.
Technically HelloNode extends HTMLElement
Well HTMLElement is not a Node package.
I will research if webcomponents could be used instead of HTMLElement.
