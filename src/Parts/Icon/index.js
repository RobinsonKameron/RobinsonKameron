import React from 'react';
import ICONS from './icon-defs';

const Icon = ({ name, fill, stroke, size }) => {
    console.log(ICONS, name)
    let path = ICONS[name].path;
    let viewbox = ICONS[name].viewBox;
    return (
        <svg
        viewBox={'0 0 24 24'}
        name={name}
        fill={fill}
        stroke={stroke}
        height={size || 60}
        width={size || 60}
        >
            <path d={path} />
        </svg>
    )
}

export default Icon;