function UrlInput({ handleSubmit, inputValue, handleChange }) {
  return (
    <div className="UrlInput">
      <h2>URL Input</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Deconstruct</button>
      </form>
    </div>
  );
}

export default UrlInput;
