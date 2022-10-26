import React, { Component, Fragment, useState } from "react";
import { Button, Select, Option, Input, Card, CardBody, } from "@material-tailwind/react";
import MainCalendar from '../components/MainCalendar';
import SmallDateDisplay from '../components/SmallDateDisplay';
import Moment from 'react-moment';
import moment from 'moment';

export default function Main() {
  const [openStatus, openIt] = useState(true);
  const [weekendsStatus, showWeekends] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [timeZone, setTimeZone] = useState("");
  const fifteenDays = moment().subtract(7, 'd').format('YYYY-MM-DD') + ' ~ ' + moment().add(7, 'd').format('YYYY-MM-DD');
  const thirtyDays = moment().subtract(15, 'd').format('YYYY-MM-DD') + ' ~ ' + moment().add(15, 'd').format('YYYY-MM-DD');

  function searchChanged(value){
    try{
      if (value){
        console.log(value)
        axios.get("api/searchTest", { params:{ simpleSearch:value, timeZone: timeZone}}).then(
          (res) => {
            setSearchData(res.data)
          }
        ) 
      }
    } catch(error){
      console.log(`搜尋失敗 ${error}`)
    }
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
              <div className="px-4 flex items-end gap-4 m-4">
                <Select size="lg" variant="outlined" label="時間區間" value="" onChange={(value) => {setTimeZone(value)}}>
                  <Option value="">無</Option>
                  <Option value="thirtyDays">{`近 30天 ${thirtyDays}`}</Option>
                  <Option value="fifteenDays">{`近 15天 ${fifteenDays}`}</Option>
                  <Option value="allTimes">{`全部時間`}</Option>
                </Select>
              </div>
              <div className="px-4 space-x-4 h-1/3 m-4 flex">
                <Input label="搜尋行程..." onChange={(value)=>{searchChanged(value.target.value)}} />
              </div>
                {searchData.length ? searchData.map(event => { return(
                    <Card className="w-full">
                      <CardBody>{event.event_name}</CardBody>
                    </Card>
                  )
                }) : <div className="w-full text-center">搜尋行程</div>}
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
              <input type="checkbox" checked={weekendsStatus} onChange={e => {}} className="items-start"/>
              顯示周末
            </Button>
            <Button color="gray" className="col-span-1 col-end-14 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
            </Button>
            <div className="col-span-3 col-end-17 text-center group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-green-900 overflow-hidden relative before:absolute before:bg-green-00 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
              <span className="relative z-0 text-white group-hover:text-white transition ease-in-out duration-500">
                + 新增行程
              </span>
            </div>
          </div>
          <MainCalendar id="calendar" showWeekends={weekendsStatus}/>
      </div>
    </main>
    </>
  );
}