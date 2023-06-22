import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const { counter, setCounter } = useCounterContext();

  const { color } = useTitleColorContext()

  console.log(color);

  return (
    <div>
      <h2 style={{ color: color }}>
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