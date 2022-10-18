import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import locale from '@fullcalendar/core/locales/zh-tw';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default class Calendar extends Component {
  render() {
    return (
      <FullCalendar
        // ref={withFullCalendar}
        locale={locale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
        views={{
          dayGridYear: {
            dayCellClassNames(item) {
              const _classnames = [];
              if (!item.isOther && moment(item.date).isSame(moment(selectedDay), 'date')) {
                _classnames.push('fc-day-selected');
              }
              return _classnames;
            },
            dateClick(event) {
              handleSelectedDay(event.date);
            },
          },
        }}
        // views={{
        // dayGridMonth: {
        //     dayCellClassNames(item) {
        //         const _classnames = [];
        //         if (item.isOther) {
        //             const prevmont = moment(item.view.currentStart).subtract(1, 'days');
        //             const nextmonth = moment(item.view.currentEnd);

        //             const prevdays = moment(item.date).diff(moment(prevmont), 'days');
        //             const nextdays = moment(item.date).diff(moment(nextmonth), 'days');
        //             if (prevdays <= 0 && prevdays >= -6) {
        //                 _classnames.push('fc-day-prevmonth');
        //                 if (prevdays == 0 && item.dow != 6) {
        //                     _classnames.push('fc-day-month-divider');
        //                 }
        //             }
        //             if (nextdays >= 0 && nextdays <= 6) {
        //                 _classnames.push('fc-day-nextmonth');
        //                 if (nextdays == 0 && item.dow != 0) {
        //                     _classnames.push('fc-day-month-divider');
        //                 }
        //             }
        //         }
        //         if (moment(item.date).isSame(moment(selectedDay), 'day')) {
        //             _classnames.push('fc-day-selected');
        //         }
        //         return _classnames;
        //     },
        //     dayCellContent(item) {
        //         console.log(moment(item.date))
        //         const lunar = Lunar.fromDate(item.date);
        //         return (
        //             <>
        //                 <label className="fc-daygrid-day-lunar">
        //                     {lunar.getDayInChinese()} {lunar.getJieQi()}
        //                 </label>
        //                 <label
        //                     className="fc-daygrid-day-solar"
        //                     data-date={moment(item.date)}
        //                     onClick={handleNavLink}
        //                 >
        //                     {item.date.getDate()}
        //                 </label>
        //             </>
        //         );
        //     },
        //     dateClick(event) {
        //         if (isDoubleClick(event.dayEl)) {
        //             handleNewEvent(event.date);
        //             console.log('双击事件', event);
        //         } else {
        //             handleSelectedDay(event.date);
        //         }
        //     },
        //     eventClick(e) {
        //         console.log(e);
        //     },
        // },
        // timeGridWeek: {
        //     dayCellClassNames(item) {
        //         const _classnames = [];
        //         if (moment(item.date).isSame(moment(selectedDay), 'day')) {
        //             _classnames.push('fc-day-selected');
        //         }
        //         return _classnames;
        //     },
        // },
        // dayGridYear: {
        //     dayCellClassNames(item) {
        //         const _classnames = [];
        //         if (!item.isOther && moment(item.date).isSame(moment(selectedDay), 'date')) {
        //             _classnames.push('fc-day-selected');
        //         }
        //         return _classnames;
        //     },
        //     dateClick(event) {
        //         handleSelectedDay(event.date);
        //     },
        // },
        // }}
        aspectRatio={5}
        firstDay={0}
        contentHeight='auto'
        nowIndicator={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={(...args) => {
          console.log('dateClick', args);
        }}
        themeSystem='bootstrap5'
        // eventContent={renderEventContent}
      />
    )
  }
}