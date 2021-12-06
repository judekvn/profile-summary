import React, { useState } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import './UserForm.css'

export const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`https://reqres.in/api/users`, { name: firstName + ' ' + lastName, job: job });
    }
    return (
        <div className='user-cont'>
            <Link to='/'>Home</Link>

            <h3>New User Form</h3>
            <form className='user-space'>
                <div>
                    <label>First name:</label><br />
                    <input type="text" onChange={e => setFirstName(e.target.value)} /><br />
                </div>
                <div>
                    <label>Last name:</label><br />
                    <input type="text" onChange={e => setLastName(e.target.value)} /><br />
                </div>
                <div>
                    <label>Job:</label><br />
                    <input type="text" onChange={e => setJob(e.target.value)} /><br />
                </div>

                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}
