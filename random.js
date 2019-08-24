import React from 'react';
import ReactDOM from 'react-dom';

function MyCar(props) {
    return (
        <h1> My Car is a: {MyCar.props}
    )
}

ReactDOM.render (
    <MyCar make="Tesla" />, document.getElementById('root')
)
