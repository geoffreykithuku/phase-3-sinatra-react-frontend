import React from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import NavBar from './Components/NavBar';
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact';
import ViewContact from './Components/ViewContact';
import EditContact from './Components/EditContact';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to ={'/contacts/list'}/>} />
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
