import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Stopwatch = () => {
        const [time, setTime] = useState(0);

        const [isRunning, setIsRunning] = useState(false);

        useEffect(()=>{
            let intervalId;
            if(isRunning){
                intervalId = setInterval(()=>setTime(time+1),10)
            }
            return ()=> clearInterval(intervalId);
        },[isRunning, time])

        //Hours Calculation
        const hours = Math.floor(time/360000);

        //Minutes calculation
        const minutes = Math.floor((time%36000)/6000);

        //seconds calculation
        const seconds = Math.floor((time%6000)/100)

        //Milliseconds calculation
        const milliseconds = time% 100;

        //Method to start and stop timer
        const startAndStop = () =>{
            setIsRunning(!isRunning);
        }

        const reset = ()=>{
            setTime(0);
        };


  return (
    <div className='container mt-5 bg-dark p-4 rounded'>
        <div>
            <p className='p-5 text-white'>
                {hours}:{minutes.toString().padStart(2,"0")}:
                {seconds.toString().padStart(2,"0")}:
                {milliseconds.toString().padStart(2,"0")}
            </p>
            <div className='flex m-2'>
                <button className='btn btn-primary m-1' onClick={startAndStop}>
                    {isRunning?'Stop':'Start'}
                </button>
                <button className='btn btn-danger m-1' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch