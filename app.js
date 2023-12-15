import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
        id:"heading"
    }, 
"hello from react")
const parent = React.createElement(
    "div",
    {
        id:"parent"
    },
    React.createElement(
        "div",
        {
            id:"child"
        },
        [React.createElement("h1",{}, "hellooo h1 I am nested elements 😄"),
        React.createElement("h2",{}, "hellooo h2 I am nested elements")]
    )
    )

    //jsx
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);