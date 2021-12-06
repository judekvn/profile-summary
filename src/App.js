import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {HomePage} from './components/HomePage/HomePage'
import {ProfilePage} from './components/ProfilePage/ProfilePage'
import {UserForm} from './components/UserForm/UserForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/new-user" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
