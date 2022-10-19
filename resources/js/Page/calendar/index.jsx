import '@fullcalendar/react/dist/vdom';
import './style/index.scss';
import { useState } from 'react';
import './style.css';
// import classnames from 'classnames';
import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import SidebarTrigger from './components/SidebarTrigger';
import MainCalendar from './pages/MainCalendar';

function Calendar() {
  const [openStatus, setIsOpen] = React.useState(true);

  return (
    <main className="">
      <Sidebar openStatus={openStatus} openIt={setIsOpen} />
      <MainCalendar/>
    </main>
    );
}
export default Calendar;


{/* <div class="container mx-auto px-4 py-2 md:py-24">
  <MainCalendar />
</div> */}