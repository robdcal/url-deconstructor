function UrlInput({ handleSubmit, inputValue, handleChange }) {
  return (
    <div className="urlInput">
      <h2>Enter your URL</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Deconstruct</button>
      </form>
    </div>
  );
}

export default UrlInput;
