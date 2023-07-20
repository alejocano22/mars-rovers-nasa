const CalendarInput = ({ date, setDate }: any) => {
  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (event: any) => {
    const selectedDate = event.target.value;
    if (selectedDate > today) {
      event.target.value = today;
    }
    setDate(selectedDate);
  };

  return (
    <input
      type='date'
      defaultValue={date}
      max={today}
      onChange={handleDateChange}
      className='w-40 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
    />
  );
};

export default CalendarInput;
