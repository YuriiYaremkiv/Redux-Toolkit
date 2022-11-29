import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, toggleTodoCompleted, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoCompleted={toggleTodoCompleted}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
