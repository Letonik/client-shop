import React from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const Charts = ({data, color}) => {
    let fill = "url(#"+ color +")"
    return (
        <AreaChart width={650} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id={color} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="sum" stroke={color} fillOpacity={1} fill={fill} />
        </AreaChart>
    );
};

export default Charts;