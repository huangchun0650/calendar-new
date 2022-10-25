import React from "react";
import FullCalendar, { render } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import locale from '@fullcalendar/core/locales/zh-tw';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/fc.css';
import axios from "axios";

export default function Calendar({ showWeekends }) {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        // dateClick={handleDateClick()}
        handleWindowResize={true}
        weekends={showWeekends}
        initialView={"dayGridMonth"}
        aspectRatio={1}
        firstDay={0}
        height={'90%'}
        nowIndicator={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        themeSystem={'bootstrap5'}
        select={function addEvent(info) {
          const eventName = prompt("新增行程");
          let calendarApi = info.view.calendar

          calendarApi.unselect() // clear date selection
          if (eventName) {
            axios
              .post("api/schedule-add", {
                start_date: info.start.valueOf(),
                end_date: info.end.valueOf(),
                event_name: eventName,
              })
              .then(() => {
                calendarApi.addEvent({
                  title: eventName,
                  start: info.start,
                  end: info.end,
                  allDay: true,
                })
              })
              .catch((error) => {
                console.log(`新增失敗 ${error}`)
              });
          }
        }}
        customButtons={{
          customToDay: {
            text: '今天',
            click: function () {
              setSelectedDay(new Date());
            },
          },
        }}
        headerToolbar={{
          left: 'prev,customToDay,next',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear',
        }}
        events={function getEvents(info, successCallback, failureCallback) {
          console.log(info.end.valueOf())
          axios
            .post("api/schedule-get", {
              start_date: info.start.valueOf(),
              end_date: info.end.valueOf(),
            })
            .then((response) => {
              // calendar.removeAllEvents();
              successCallback(response.data);
            })
            .catch((error) => {
              console.log(error)
            });
        }}
      />
    )
  }

  // var calendarEl = document.getElementById("calendar");
//   let calendar = new Calendar(calendarEl,
//     {
//       plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
//       handleWindowResize:true,
//       weekends:showWeekends,
//       locale:locale,
//       initialView:"dayGridMonth",
//       aspectRatio: 1,
//       firstDay: 0,
//       height: '90%',
//       nowIndicator: true,
//       selectable: true,
//       selectMirror: true,
//       dayMaxEvents: true,
//       themeSystem: 'bootstrap5',
//       customButtons:{
//         customToDay: {
//           text: '今天',
//           click: function () {
//             setSelectedDay(new Date());
//           },
//         },
//       },
//       headerToolbar:{
//         left: 'prev,customToDay,next',
//         center: 'title',
//         right: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear',
//       },
//     }
//   )
  
//   return (
//     <>
//       <FullCalendar
//         // ref={withFullCalendar}
//         handleWindowResize={true}
//         weekends={showWeekends}
//         locale={locale}
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
        // customButtons={{
        //   customToDay: {
        //     text: '今天',
        //     click: function () {
        //       setSelectedDay(new Date());
        //     },
        //   },
        // }}
        // headerToolbar={{
        //   left: 'prev,customToDay,next',
        //   center: 'title',
        //   right: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear',
        // }}
//         aspectRatio={1}
//         firstDay={0}
//         height='90%'
//         nowIndicator={true}
//         selectable={true}
//         selectMirror={true}
//         dayMaxEvents={true}
//         dateClick={(...args) => {
//           console.log('dateClick', args);
//         }}
//         themeSystem='bootstrap5'
//         events={function getEvents(info, successCallback, failureCallback){
//           axios
//             .post("/schedule-get", {
//               start_date: info.start.valueOf(),
//               end_date: info.end.valueOf(),
//             })
//             .then((response) => {
//               // 追加したイベントを削除
//               calendar.removeAllEvents();
//               // カレンダーに読み込み
//               successCallback(response.data);
//             })
//             .catch((error) => {
//               // バリデーションエラーなど
//               console.log(error)
//             });
//         }}
//       />
//     </>
//   );
// }

// views={{
                //   dayGridMonth: {
                //     dayCellClassNames(item) {
                //       const _classnames = [];
                //       if (item.isOther) {
                //         const prevmont = moment(item.view.currentStart).subtract(1, 'days');
                //         const nextmonth = moment(item.view.currentEnd);

                //         const prevdays = moment(item.date).diff(moment(prevmont), 'days');
                //         const nextdays = moment(item.date).diff(moment(nextmonth), 'days');
                //         if (prevdays <= 0 && prevdays >= -6) {
                //           _classnames.push('fc-day-prevmonth');
                //           if (prevdays == 0 && item.dow != 6) {
                //             _classnames.push('fc-day-month-divider');
                //           }
                //         }
                //         if (nextdays >= 0 && nextdays <= 6) {
                //           _classnames.push('fc-day-nextmonth');
                //           if (nextdays == 0 && item.dow != 0) {
                //             _classnames.push('fc-day-month-divider');
                //           }
                //         }
                //       }
                //       if (moment(item.date).isSame(moment(selectedDay), 'day')) {
                //         _classnames.push('fc-day-selected');
                //       }
                //       return _classnames;
                //     },
                //     dayCellContent(item) {
                //       console.log(moment(item.date))
                //       const lunar = Lunar.fromDate(item.date);
                //       return (
                //         <>
                //           <label className="fc-daygrid-day-lunar">
                //             {lunar.getDayInChinese()} {lunar.getJieQi()}
                //           </label>
                //           <label
                //             className="fc-daygrid-day-solar"
                //             data-date={moment(item.date)}
                //             onClick={handleNavLink}
                //           >
                //             {item.date.getDate()}
                //           </label>
                //         </>
                //       );
                //     },
                //     dateClick(event) {
                //       if (isDoubleClick(event.dayEl)) {
                //         handleNewEvent(event.date);
                //         console.log('双击事件', event);
                //       } else {
                //         handleSelectedDay(event.date);
                //       }
                //     },
                //     eventClick(e) {
                //       console.log(e);
                //     },
                //   },
                //   timeGridWeek: {
                //     dayCellClassNames(item) {
                //       const _classnames = [];
                //       if (moment(item.date).isSame(moment(selectedDay), 'day')) {
                //         _classnames.push('fc-day-selected');
                //       }
                //       return _classnames;
                //     },
                //   },
                //   dayGridYear: {
                //     dayCellClassNames(item) {
                //       const _classnames = [];
                //       if (!item.isOther && moment(item.date).isSame(moment(selectedDay), 'date')) {
                //         _classnames.push('fc-day-selected');
                //       }
                //       return _classnames;
                //     },
                //     dateClick(event) {
                //       handleSelectedDay(event.date);
                //     },
                //   },
                // }}