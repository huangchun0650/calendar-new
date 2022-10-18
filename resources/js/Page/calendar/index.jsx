import '@fullcalendar/react/dist/vdom';
import './style/index.scss';
import { useState } from 'react';
import './style.css';
// import classnames from 'classnames';
import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import MainCalendar from './pages/MainCalendar';

function Calendar() {
  const mainPanel = React.useRef(null);
  return (
      <>
      {/* <div className="layout">
        <div className="sider">
          <Sidebar/>
        </div>
        <div className="header">
          header
        </div>
        <div className="main-panel" ref={mainPanel}>
          <MainCalendar />
        </div>
      </div> */}
      <div class="h-screen flex">
        {/* <!-- Fixed sidebar --> */}
        
        <div class="bg-gray-600 w-64">
          <Sidebar />
        </div>
        {/* <!-- Scroll wrapper --> */}
        <div class="flex-1 flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div class="flex-1 overflow-y-scroll">
            {/* <!-- Your content --> */}
            <MainCalendar />
          </div>
        </div>
      </div>
      </>
    )
}
export default Calendar;