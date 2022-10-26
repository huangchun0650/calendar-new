<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use GuzzleHttp\Client;

class ScheduleController extends Controller
{
    //
    public function scheduleAdd(Request $request)
    {
        $request->validate([
            'start_date' => 'required|integer',
            'end_date' => 'required|integer',
            'event_name' => 'required|max:32',
        ]);

        $schedule = new Schedule;

        $schedule->start_date = date('Y-m-d', $request->input('start_date') / 1000);
        $schedule->end_date = date('Y-m-d', $request->input('end_date') / 1000);
        $schedule->event_name = $request->input('event_name');
        $schedule->save();
        return;
    }

    /**
     * 行程取得
     *
     * @param  Request  $request
     */
    public function scheduleGet(Request $request)
    {
        $request->validate([
            'start_date' => 'required|integer',
            'end_date' => 'required|integer'
        ]);

        $start_date = date('Y-m-d', $request->input('start_date') / 1000);
        $end_date = date('Y-m-d', $request->input('end_date') / 1000);
        $res= Schedule::query()
            ->select(
                'start_date as start',
                'end_date as end',
                'event_name as title'
            )->where('end_date', '>', $start_date)
            ->where('start_date', '<', $end_date)
            ->get();
        
        return $res;
    }

    public function searchTest(Request $request)
    {
        $request->validate([
            'simpleSearch' => 'required',
            'timeZone' => 'nullable',
        ]);

        $searchParams = $request->input('simpleSearch');
        $timeZone = $request->input('timeZone');

        return Schedule::search($searchParams)->get();
    }
}
