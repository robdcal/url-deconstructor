function UrlInput({ handleSubmit, inputValue, handleChange, error }) {
  return (
    <div className="urlInput">
      <h2>Enter your URL</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Deconstruct</button>
      </form>
      {/* {error ? `${error}` : null} */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UrlInput;
