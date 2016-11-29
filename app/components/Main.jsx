var React = require('react');
import Nav from 'Nav';

const Main =  (props)=> {
        return(
            <div>
                <Nav />
                <p>Main.jsx Rendered</p>
                {props.children}
            </div>
        );
    
}

module.exports = Main;