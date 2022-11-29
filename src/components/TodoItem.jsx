import { useDispatch } from 'react-redux';
import { removeTodo, toogleTodoComplete } from '../store/todoSlice';

import css from './TodoItem.module.scss';

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.list__item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toogleTodoComplete({ id }))}
      />
      <span> {text}</span>
      <span
        className={css.delete}
        onClick={() => dispatch(removeTodo({ id }))}
        style={{
          color: 'red',
          paddingLeft: 'auto',
        }}
      >
        &times;
      </span>
    </li>
  );
};
