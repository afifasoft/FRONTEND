import React, { Component, useState } from 'react';
import { Button, DatePicker }  from 'antd';

import { getWeek } from '../utils/date-wrangler';

import '../App.css';
class App extends Component {



    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <DatePicker onChange={ (date) => console.log(date)}/>
                <Button type="primary" style={{ marginLeft: 8}} onClick={() => console.log(getWeek(new Date()))}>
                    Book
                </Button>
            </div>
        );
    }
}

export default App;