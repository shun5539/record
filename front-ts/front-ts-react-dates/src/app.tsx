import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "moment/locale/ja"; // 日本語ローカライズ
import "react-dates/initialize";

import "react-dates/lib/css/_datepicker.css";

const App = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<
    "startDate" | "endDate" | null
  >(null);

  return (
    <>
      <h1>マッピング</h1>
      <DateRangePicker
        // 1日指定可能
        minimumNights={0}
        isOutsideRange={() => false}
        startDate={startDate}
        startDateId="startDateId"
        endDate={endDate}
        endDateId="endDateId"
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        onDatesChange={(selectedDates) => {
          setStartDate(selectedDates.startDate);
          setEndDate(selectedDates.endDate);
        }}
      />
    </>
  );
};
export default App;
