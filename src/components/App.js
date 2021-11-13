import React, { Component, useState, Fragment} from 'react';
import { Button, DatePicker }  from 'antd';

import { getWeek } from '../utils/date-wrangler';
import BookingsPage from '../components/Bookings/BookingsPage';

import '../App.css';

class App extends Component {
    

    render() {
        
       
        return (
           
           <div>
           <div>
                <h1>Bye there! He</h1>
                <DatePicker onChange={ (date) => console.log(date)}/>
                <Button type="primary" style={{ marginLeft: 8}} onClick={() => console.log(getWeek(new Date()))}>
                    Book 
                </Button>
                <Button type="primary" style={{ marginLeft: 8}} onClick={() => console.log(getWeek(new Date(), 7))}>
                    GetWeek
                </Button>
            </div>
            <div>
                <BookingsPage/>
            </div>
            </div>
        );
        
    }
}

export default App;