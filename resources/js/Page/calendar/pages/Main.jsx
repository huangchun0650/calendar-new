import React, { Component, Fragment } from "react";
import { Button, Select, Option, Input, IconButton } from "@material-tailwind/react";
import MainCalendar from '../components/MainCalendar';
import SmallDateDisplay from '../components/SmallDateDisplay';
import Moment from 'react-moment';
import moment from 'moment';

export default function Main() {
  const [openStatus, openIt] = React.useState(true);
  const [weekendsStatus, showWeekends] = React.useState(true);
  const fifteenDays = moment().subtract(7, 'd').format('YYYY-MM-DD') + ' ~ ' + moment().add(7, 'd').format('YYYY-MM-DD');
  const thirtyDays = moment().subtract(15, 'd').format('YYYY-MM-DD') + ' ~ ' + moment().add(15, 'd').format('YYYY-MM-DD');

  searchChanged = event => {
    this.setState({ search: event.target.value })
  }
  return (
    <>
      <main className="relative w-screen h-screen">
        <div className={"relative h-full " + (openStatus ? " w-1/5" : "w-8")}>
          <div className={"absolute inset-y-0 w-11/12 bg-white bg-opacity-25 inset-0 transform ease-in-out fixed" +
              (openStatus
                ? " transition-opacity opacity-100 duration-500 -translate-x-0 "
                : " transition-all opacity-0 -translate-x-6")
            }
            >
            <article className="relative max-w-md max-h-min flex flex-col ease-in-out">
              <SmallDateDisplay />
              <div className="px-2 bg-red-300 h-1/3">123</div>
              <div className="px-4">
                <Select label="近 30天">
                  <Option>{`近 30天 ${thirtyDays}`}</Option>
                  <Option>{`近 15天 ${fifteenDays}`}</Option>
                  <Option>{`全部時間`}</Option>
                </Select>
              </div>
              <div className="px-4 space-x-4 h-1/3 m-4 flex">
                <Input label="搜尋行程..." onChange={this.searchChanged} value={this.state.search} />
                <IconButton onClick={() => simpleSearch(data)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </IconButton>
              </div>
            </article> 
            </div>
            <div className={"absolute inset-y-0 w-8 cursor-pointer bg-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 ease-in-out fixed" + 
                (openStatus
                ? " transition-opacity opacity-100 duration-500 -translate-x-0 right-0"
                  : " transition-opacity opacity-100 -translate-x-5/6")
              } onClick={() => openIt(!openStatus)}
            >
                <span className="absolute w-1 h-10 -translate-x-1/2 bg-gray-400 rounded-lg top-1/2 left-1/2 dark:bg-gray-600"></span>
            </div>
        </div>
        <div className={"z-10 absolute inset-y-0 right-0 px-4 bg-white " + (openStatus ? "w-4/5" : "w-lessFullScren")}>
          <div className="w-full h-auto grid grid-cols-16 gap-4 px-4 m-4">
            <Button color="gray" variant="outlined" className="col-start-auto col-span-2" onClick={() => showWeekends(!weekendsStatus)}>
              <input type="checkbox" checked={weekendsStatus} className="items-start"/>
              顯示周末
            </Button>
            <Button color="gray" className="col-span-1 col-end-14 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </Button>
            <Button color="green" className="col-span-3 col-end-17">+ 新增行程</Button>
          </div>
          <MainCalendar id="calendar" showWeekends={weekendsStatus}/>
      </div>
    </main>
    </>
  );
}