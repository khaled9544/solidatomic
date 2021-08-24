import React, { useEffect, useState } from 'react';
import './style.css';

const Toggle = () => {
    const [ status, onCollapse ] = useState('off');
    
    useEffect(() => {
        console.log(status);
    });
    
    return (
        <div className="ctm-toggle" role="presentation" onClick={() => { onCollapse(status === 'off' ? 'on' : 'off') }}>
            <div className={`round ${status === 'on' || 'collapsed'}`} />
        </div>
    )
}

export default Toggle;