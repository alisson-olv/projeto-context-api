import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const { counter, setCounter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h2 style={{ color: color }}>
        Home
      </h2>
      <p>
        {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <div>
        <br />
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home