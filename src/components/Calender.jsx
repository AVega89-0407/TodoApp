import dayjs from 'dayjs';
import "dayjs/locale/sv";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    //Använd dayjs för datum och visa allt på svenska
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='sv'>
      <DateCalendar className='calender' />
    </LocalizationProvider>
  );
}


//LocalizationProvider = inställningsbox
// AdapterDayjs = översättare mellan MUI och dayjs
// DateCalendar = själva kalendern