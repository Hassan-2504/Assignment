import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import "primereact/resources/themes/saga-blue/theme.css"; // Import your PrimeReact theme
import "primereact/resources/primereact.min.css"; // Import PrimeReact core styles
import "primeicons/primeicons.css"; // Import PrimeIcons if needed

export default function CalendarDemo() {
  const [date, setDate] = useState<Nullable<Date>>(null);

  const handleDateChange = (e: { value: Nullable<Date> }) => {
    setDate(e.value);
  };

  return (
    <div className="w-full h-full flex shadow-xl border-b rounded-3xl p-5">
      <Calendar
        value={date}
        onChange={handleDateChange}
        inline
        showWeek
        className="w-full h-full custom-calendar bg-[#F7F7F7] text-[#535353]"
        style={{ fontSize: "1.5rem" }}
      />
      <style jsx>{`
        .custom-calendar
          .p-datepicker
          .p-datepicker-calendar
          .p-datepicker-calendar-day.p-highlight {
          background-color: blue; /* Highlight color */
          color: white; /* Text color */
          border-radius: 50%; /* Rounded corners */
        }

        .custom-calendar
          .p-datepicker
          .p-datepicker-calendar
          .p-datepicker-calendar-day:hover {
          background-color: lightblue; /* Optional hover effect */
        }
      `}</style>
    </div>
  );
}
