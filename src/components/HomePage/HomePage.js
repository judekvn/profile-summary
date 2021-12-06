import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './HomePage.css'
import {
    Link
} from "react-router-dom";

export const HomePage = () => {
    const [userList, setUserList] = useState([]);
    const [pagination, setPagination] = useState(1);
    const [totalPage, setTotalPage] = useState([1]);

    useEffect(() => {
        async function fetchMyAPI() {
            const { data } = await axios.get(`https://reqres.in/api/users?page=${pagination}`);
            setUserList(data.data)
            setTotalPage(data.total_pages)

            const pageArray = [];

            for (let i = 1; i <= data.total_pages; i++) {
                pageArray.push(i)
            }
            setTotalPage(pageArray)
        }
        fetchMyAPI()
    }, [pagination])

    console.log(userList);

    return (
        <div>
            <h3>Home</h3>
            <div>
                <Link to={`/new-user`}>
                    <span>Create New User</span>
                </Link>
            </div>
            {userList && userList.length > 0 && userList.map((item) => {
                return (
                    <div key={item.id}className='user-list'>
                        <Link to={`/profile/${item.id}`}>
                            <img src={item.avatar}  alt='prof' />
                        </Link>
                        <span>{item.email}</span>
                        <span>{item.first_name}</span>
                        <span>{item.last_name}</span>
                    </div>
                )
            })}
            <div className='pagi'>
                {totalPage && totalPage.length > 0 && totalPage.map((item) => (
                    <span onClick={() => setPagination(item)}>{item}</span>
                ))}
            </div>
        </div>
    )
}
