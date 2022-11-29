export const InputFields = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <p>Text:</p>
      <input
        type="text"
        onChange={e => handleInput(e.target.value)}
        value={text}
      />
      <button type="button" onClick={handleSubmit}>
        Add Todo
      </button>
    </label>
  );
};
