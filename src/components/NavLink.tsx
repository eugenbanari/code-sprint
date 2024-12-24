import React from 'react';
import { Link } from 'react-router';

type Props = {
    to: string;
    className?: string;
    label: string;
};

const NavLink: React.FC<Props> = (props) => {
    return (
        <Link to={props.to} className={props.className}>
            {props.label}
        </Link>
    );
};

export default NavLink;
