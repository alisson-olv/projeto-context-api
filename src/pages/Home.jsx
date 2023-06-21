import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <h2>
        Home
      </h2>
      <p>
        {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </div>
  )
}

export default Home