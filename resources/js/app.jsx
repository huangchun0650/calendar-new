import "./bootstrap";
import '../css/app.css'
import '@fullcalendar/react/dist/vdom';

import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import { createRoot } from 'react-dom/client';
import Calendar from './Page/calendar';

createRoot(document.getElementById('calendar')).render(
    <Calendar/>
)