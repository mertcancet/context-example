import useCounter from 'hooks/useCounter';

const Counter = () => {
  const [counter, setCounter] = useCounter();

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Up</button>
      <button onClick={() => setCounter(counter - 1)}> Down</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
