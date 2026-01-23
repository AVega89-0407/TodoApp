import dayjs from 'dayjs';
import "dayjs/locale/sv";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='sv'>
      <DateCalendar className='calender' />
    </LocalizationProvider>
  );
}