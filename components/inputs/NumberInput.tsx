const NumberInput = ({ value, setValue }: any) => {
  const handleInputChange = (event: any) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue > 0 || event.target.value === '') {
      setValue(inputValue);
    }
  };

  return (
    <input
      type='number'
      value={value}
      onChange={handleInputChange}
      min='1'
      className='w-40 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500'
    />
  );
};

export default NumberInput;
