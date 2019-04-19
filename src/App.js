import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter, Route } from 'react-router-dom';
import Music from './components/News/News';
import Settings from './components/Settings/Settings';



const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="appWrapperContent">
                    <Route path="/profile" render={ () => { return(<Profile
                        state={props.state.profile} />)}}/>
                    <Route path="/dialogs" render={ () => { return(<Dialogs 
                        state={props.state.messages} 
                        state={props.state.messages}/>)}}/>
                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>
                </div>
            </div>
        </BrowserRouter>
    );

}





export default App;
