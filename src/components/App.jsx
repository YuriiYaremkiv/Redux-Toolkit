import { useSelector, useDispatch } from 'react-redux';
import { update, getvalue } from 'redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfCkicks = useSelector(getvalue);
  return (
    <div>
      <h1>Number of clicks: {numberOfCkicks}</h1>
      <button type="submit" onClick={() => dispatch(update(5))}>
        Add 5 clicks
      </button>
      <button type="submit" onClick={() => dispatch(update(10))}>
        Add 10 clicks
      </button>
      <button type="submit" onClick={() => dispatch(update(20))}>
        Add 20 clicks
      </button>
    </div>
  );
};
