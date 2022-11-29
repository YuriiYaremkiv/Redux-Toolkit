import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoList } from './TodoList';
import { InputFields } from './InputFields';
import { addTodo } from 'store/todoSlice';

export const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div>
      <InputFields text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
};
