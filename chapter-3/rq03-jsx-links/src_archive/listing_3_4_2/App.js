import React, { Component, Fragment } from "react";

/* Old Non JSX syntax*/

// class DateTimeNow extends Component {
//     render() {
//         const dateTimeNow = new Date().toLocaleString()
//         return React.createElement(
//             'span',
//             null,
//             `Currend date and time is ${dateTimeNow}.`
//         )
//     }
// }

/* Above but with JSX syntax */

// class DateTimeNow extends Component {
//     render() {
//         const dateTimeNow = new Date().toLocaleString()
//         return <span>Current date and time is {dateTimeNow}.</span>
//     }
// }

/* Making use of variable references*/

class DateTimeNow extends Component {
    render() {
        const dateTimeNow = new Date().toLocaleString()
        const now = <date>{dateTimeNow}</date>
        const message = <p>Today is {now}</p>
        return <span>{message}</span>
    }
}

export default DateTimeNow;
