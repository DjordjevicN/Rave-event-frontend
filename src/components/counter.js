import React, { useState, useEffect } from 'react';
import * as data from '../data'
import RegistrationForm from './RegistrationForm'
import UserCounter from './UserCounter'
function Counter() {
    let [day, setDay] = useState(0)
    let [hour, setHour] = useState(0)
    let [minute, setMinute] = useState(0)
    let [second, setSecond] = useState(0)
    let [latitude, setLatitude] = useState(0)
    let [longitude, setLongitude] = useState(0)
    let [open, setOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => countdownTimer(), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);






    const countdownTimer = () => {
        let countDownDate = new Date("Aug 14, 2021 22:00:00").getTime();
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDay(days)
        setHour(hours)
        setMinute(minutes)
        setSecond(seconds)
        setLatitude(data.locations[seconds].latitude)
        setLongitude(data.locations[seconds].longitude)

    }


    return (
        <div className="wrapper">
            <div className="content">

                <p className="title">One minute RAVE</p>
                <div className="counter">
                    <p className="counter__item counter-year">{`${day} :`}</p>
                    <p className="counter__item counter-hour">{`${hour} :`}</p>
                    <p className="counter__item counter-minute">{`${minute} :`}</p>
                    <p className="counter__item counter-seconds">{`${second}`}</p>
                </div>
                <div className="location">
                    <p className="location__item location-latitude">{`Latitude ${latitude}`}</p>
                    <p className="location__item location-longitude">{`longitude ${longitude}`}</p>
                </div>
                <div className="CTA CTA--coming" onClick={() => {
                    if (open) {
                        setOpen(false)
                    } else {
                        setOpen(true)
                    }
                }} >COMING</div>
                {open && <div className="modal">
                    <RegistrationForm />
                </div>}
                <div className="userCounter">
                    <UserCounter />
                </div>
            </div>
        </div>
    );
}

export default Counter;
