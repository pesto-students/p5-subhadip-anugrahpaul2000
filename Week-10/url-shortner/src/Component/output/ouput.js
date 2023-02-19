import "./style.css";
import propTypes from "prop-types";

const OutputElement = (props) => {
  return (
    <div className="elementWrap">
      <div className="element-container">
        <div className="">
          <div className="originalURL">
            <h4 className="heading-url-details">Original URL:</h4>
            <span className="shorturl-url-details">{props.original_link}</span>
          </div>
          <div className="shortenedURL">
            <h4 className="heading-url-details">Shortened Url: </h4>
            <span className="shorturl-url-details">{props.short_link}</span>
          </div>
          <div className="button-primary" onClick={props.onClickCopyURL}>
            Copy to Clipboard
          </div>
        </div>
      </div>
    </div>
  );
};

OutputElement.propTypes = {
  original_link: propTypes.string.isRequired,
  short_link: propTypes.string.isRequired,
  onClickCopyURL: propTypes.func.isRequired
};

export default OutputElement;
