import React from 'react';

const style = {
    display: 'flex'
};

const Flex = (props) => {
    const { children } = props;
    return <div style={{...style}}>
            {children}
    </div>
};

const SpaceBetween = (props) => {
    const { children } = props;
    return <div style={{...style, justifyContent: 'space-between'}}>
        {children}
    </div>
}

export {Flex, SpaceBetween};