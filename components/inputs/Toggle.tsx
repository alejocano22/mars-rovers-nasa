const Toggle = ({ state, setState }: any) => {
  const handleToggle = () => {
    setState(!state);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`rounded-full w-16 h-8 ${
          state ? 'bg-green-500' : 'bg-yellow-500'
        }`}
      >
        <span
          className={`block h-6 w-6 mx-2 rounded-full transform transition-transform ${
            state ? 'translate-x-6 bg-blue-400' : 'bg-orange-400'
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;
