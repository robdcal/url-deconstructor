function UrlInput(props) {
  return (
    <div className="UrlInput">
      <p>URL Input</p>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
}

export default UrlInput;
