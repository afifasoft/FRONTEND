import React, { useReducer } from "react";
import reducer from "./weekReducer";
import {getWeek} from "../../utils/date-wrangler";

import { Button }  from 'antd';

export default function WeekPicker ({date}) {
    const [week, dispatch] = useReducer(reducer, date, getWeek);

    return (
        <div>
            <Button type="primary" onClick={() => dispatch({ type: "PREV_WEEK"})}>
                Previous
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "TODAY"})}>
                Today
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "NEXT_WEEK"})}>
                Next
            </Button>
            {week.date}
            {week.start}
            {week.end}
        </div>
    );
}