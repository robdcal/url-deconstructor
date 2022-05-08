function UrlInput({ handleSubmit, inputValue, handleChange, active }) {
  return (
    <div
      className="urlInput"
      // style={{ marginBottom: active ? "0rem" : "4rem" }}
    >
      <h2>Enter your URL</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button>Deconstruct</button>
      </form>
    </div>
  );
}

export default UrlInput;
