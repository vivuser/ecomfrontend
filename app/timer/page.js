"use client"
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import DateRange from '../components/DateRangePicker';

const data =[
  "data1",
  "data2"   
]

const Timer = () => {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const [formData, setFormData] = useState({
        startDate:"",
        endDate: ""   
    })
    const[startTimestamp, setStartTimeStamp] = useState('')
    const[endTimestamp, setEndTimeStamp] = useState('')
    const [showDelay, setShowDelay ] = useState(false)
    const [timers, setTimers] = useState(data.map(() => ({ isRunning: false, time: 0})))


    const startTimer =(id) => {
    setTimers(prevTimers => 
      prevTimers.map((timer, index) => 
      index === id
      ? {...timer, isRunning: true}
      :timer
  ))}

const stopTimer = (id) => {
  setTimers(prevTimers => 
    prevTimers.map((timer, index) => 
      index === id 
        ? { ...timer, isRunning: false } 
        : timer
    )
  );
}

const updateTime = () => {
  setTimers(prevTimers => 
    prevTimers.map(timer => 
      timer.isRunning
        ? { ...timer, time: timer.time + 1 } 
        : timer
    )
  );
};

useEffect(() => {
  const interval = setInterval(updateTime, 1000); // Update time every second
  return () => clearInterval(interval); // Cleanup on unmount
}, []);

const setDateRange = (dates) => {
    console.log(dates, 'Selected Dates'); // Debugging log
    if (dates && dates.length === 2) {
      const [startDate, endDate] = dates;
      const start = new Date(startDate);
      const end = new Date(endDate);

        setStartTimeStamp(start.getTime());
        setEndTimeStamp(end.getTime());

        console.log(startTimestamp, 'start time')
        console.log(endTimestamp, 'end time')


      setFormData((prev) => ({
        ...prev,
        startDate: startDate ? start : null,
        endDate: endDate ? end : null,
      }));
    } else if (dates && dates.length === 1) {
      // If only startDate is selected, set endDate to null
      const [startDate] = dates;
      const start = new Date(startDate);

      setFormData({
        ...formData,
        startDate: start,
        endDate: null,
      });
    } else {
      setFormData({
        startDate: null,
        endDate: null,
      });
    }
}

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
// const startTime = formData.startDate.toISOString().split('T')[0];

const endTime = formData.endDate
// constTimeStamp1 = startTime.getTime()
const timeStamp = today.getTime()

useEffect(() => {
  if (endTimestamp !== null && startTimestamp !== null) {
      const timeStamp = today.getTime();
      if (timeStamp > endTimestamp) {
          setShowDelay(true);
      } else {
          setShowDelay(false);
      }
  }
}, [endTimestamp, startTimestamp, today]);



  return (
    <div>
        <DateRange 
        setDateRange={setDateRange}
        dateRange={[formData.startDate, formData.endDate]}
        />
        <h4>Today:{formattedDate}</h4>
        <h4>{endTimestamp}</h4>
        <h4>{timeStamp}</h4>
        {showDelay && endTimestamp ?   "delayed"  : "on time"}
        {/* <Button
        onClick={startTimer}>
            Start
        </Button> */}

        <Button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </Button>
    
      <Table>
  <TableHead>
    <TableRow>
      <TableCell>data</TableCell>
      <TableCell>actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {
      data.map((d, index) => (
        <TableRow key={index}>
          <TableCell>{d}</TableCell>
          <TableCell ><Button onClick={() => startTimer(index)}>start</Button></TableCell>
          <TableCell><Button onClick={() => stopTimer(index)}>stop</Button></TableCell>
          <TableCell>{timers[index].time}</TableCell>
        </TableRow>
      ))
    }
  </TableBody>
</Table>
    
    </div>
  )
}

export default Timer;