import React from 'react';
import './NavigationItem.css'

const navigationItem = (props) => {

    let active = props.active ? 'active' : null;
    return (
        <li className="NavigationItem">
            <a href={props.link} className={active}>{props.children}</a>
        </li>
    );
};

export default navigationItem;