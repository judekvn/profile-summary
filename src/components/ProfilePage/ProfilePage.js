import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ProfilePage.css'
import {
    useParams,
    Link
} from "react-router-dom";

export const ProfilePage = () => {
    const [userDetail, setUserDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
            setUserDetail(data.data)
        }

        fetchData()
    }, [id])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className='prof-cont'>
            <div>
                <h3>Profile</h3>
                <div>
                    <Link to={`/`}>
                        <span>Back</span>
                    </Link>
                </div>
                <div className='profile-space'>
                    {userDetail && userDetail.avatar && <div className='square'><img className='prof-img' alt='prof' src={userDetail.avatar} /></div>}
                    {userDetail && userDetail.first_name && (
                        <div>
                            <span className='prof-tab'>First Name :</span>
                            <span>{userDetail.first_name}</span>
                        </div>
                    )}
                    {userDetail && userDetail.last_name && (
                        <div>
                            <span className='prof-tab'>Last Name :</span>
                            <span>{userDetail.last_name}</span>
                        </div>
                    )}
                    {userDetail && userDetail.email && (
                        <div>
                            <span className='prof-tab'>Email :</span>
                            <span>{userDetail.email}</span>
                        </div>
                    )}
                    {userDetail && userDetail.job && (
                        <div>
                            <span className='prof-tab'>Job :</span>
                            <span>{userDetail.job}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
