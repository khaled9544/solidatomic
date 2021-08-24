import React, { Children } from 'react';
import propTypes from 'prop-types';

const Typography = (props) => {
    const { type, children, color } = props;
    switch(type) {
        case 'heading':
            return <h1 className="typo-large" style={{ color }}>{children}</h1>
        case 'subheading':
            return <h2 className="typo-medium" style={{ color }}>{children}</h2>
        case 'caption':
            return <span className="typo-small" style={{ color }}>{children}</span>
        default: 
            <p className="type-normal" style={{ color }}>
                {children}
            </p>   
    }

};

Typography.defaultProps = {
    type: 'body',
    color: '#cccccc'
};

Typography.propTypes = {
    type: propTypes.oneOf(['heading', 'subheading', 'body', 'caption']),
    color: propTypes.color
};

export default Typography;