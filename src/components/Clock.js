import React from 'react';
import '../css/clock.css'

function Clock() {

    const startTime = new Date().toLocaleTimeString();
    const [time, setTime] = React.useState(startTime);

    function updateTime() {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }

    setInterval(updateTime,1000);
    return (
        <div className="container">
            <h3 className="clock">{time.slice(0,7)}</h3>
        </div>
    );
}

export default Clock;