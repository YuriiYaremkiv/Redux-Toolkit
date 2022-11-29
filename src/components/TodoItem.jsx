export const TodoItem = ({
  id,
  text,
  completed,
  toggleTodoCompleted,
  removeTodo,
}) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span> {text}</span>
      <span
        onClick={() => removeTodo(id)}
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
