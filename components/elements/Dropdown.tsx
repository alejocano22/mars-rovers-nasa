const Dropdown = ({ options, setOption, value }: any) => {
  const handleSelectChange = (event: any) => {
    setOption(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleSelectChange}
      className='appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
    >
      {options.map((option: any, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
