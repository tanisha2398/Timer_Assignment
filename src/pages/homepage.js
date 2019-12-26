import React from 'react';
import Sync from '../components/Sync';
import Delay from '../components/Delay';

export default function Homepage() {
    return (
        <div style={{textAlign: "center"}}>
            <Sync />
            <Delay/>
        </div>
    )
}
