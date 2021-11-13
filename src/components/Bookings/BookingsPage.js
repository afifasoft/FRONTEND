import React, { Component, Fragment } from "react";
import WeekPicker from "./WeekPicker";

class   BookingsPage extends Component {
   render () {
    return (
        <Fragment>
        <div>
            <WeekPicker date={new Date()}/>
        </div>
        </Fragment>
    );
   }
}

export default BookingsPage;
