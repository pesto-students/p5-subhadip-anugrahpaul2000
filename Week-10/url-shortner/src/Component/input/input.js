import PropTypes from "prop-types";
import "./style.css";

const UrlInput = (props) => {
  let outputText = "";
  if (props.value !== "") {
    outputText = props.validated ? "URL looks safe" : "Invalid Url";
  } else {
    outputText = "";
  }

  return (
    <div className="url-input-container">
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={props.validated ? "valid-input" : "error-input"}
      />
      <button
        disabled={!props.validated}
        onClick={props.handleShorten}
        className="button-primary"
      >
        Shorten
      </button>
      {
        <div className={props.validated ? "valid-text" : "error-text"}>
          {outputText}
        </div>
      }
    </div>
  );
};

UrlInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validated: PropTypes.bool,
  handleShorten: PropTypes.func.isRequired
};

export { UrlInput };
