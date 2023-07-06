import React from 'react';
import '../css/date.css';

function Datee() {
    const startDate = new Date().toDateString();
    const [date, setDate] = React.useState(startDate);

    function changeDate()
    {
        const newDate = new Date().toDateString();
        setDate(newDate);
    }

    setInterval(changeDate,1000);

    return (
        <h4>{date}</h4>
    );
}

export default Datee;