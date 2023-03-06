import "./FormInput.css";

const FromInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} className="input form-input" />
      <>
        <span className="error-msg">{errorMessage}</span>
      </>
    </div>
  );
};
export default FromInput;
