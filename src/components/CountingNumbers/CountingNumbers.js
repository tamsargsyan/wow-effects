import "./style.css";

const CountingNumbers = () => {
  const numbers = [
    {
      id: 1,
      number: "32K",
      name: "Realized projects",
    },
    {
      id: 2,
      number: "16+",
      name: "Years of experience",
    },
    {
      id: 3,
      number: "64",
      name: "Team members",
    },
  ];

  return (
    <div className='countingNumbersContainer container'>
      <div className='countingNumbersfirst'>
        <p className='countingNumbersfirstTitle'>Well-established</p>
      </div>
      <div className='countingNumbers'>
        {numbers.map(num => (
          <div className='countingNumberContainer' key={num.id}>
            <p className='countingNumber'>{num.number}</p>
            <p className='countingNumberName'>{num.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountingNumbers;
