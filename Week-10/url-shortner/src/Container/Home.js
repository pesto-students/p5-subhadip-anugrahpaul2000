import "../styles/Home.css";
import React from "react";
import { UrlInput } from "../Component/input/input";
import { validateurl } from "../utilities/UrlValidator";
import OutputElement from "../Component/output/ouput";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlList: [],
      url: ""
    };
  }

  handleShorten = async () => {
    const urlList = this.state.urlList;

    const { ok, result } = await this.shortenURL(this.state.url);

    if (ok) {
      let tempData = {
        short_link: result.short_link,
        original_link: result.original_link
      };
      urlList.push(tempData);
      this.setState({
        urlList,
        url: ""
      });
    }
  };

  shortenURL = async (url) => {
    let api = `https://api.shrtco.de/v2/shorten?url=${url}`;
    let response = await (await fetch(api)).json();
    return response;
  };

  handleOnClickCopyURL = async (short_link) => {
    const foundIndex = this.state.urlList.findIndex(
      (shortened) => shortened.short_link === short_link
    );
    if (foundIndex !== -1) {
      navigator.clipboard
        .writeText(this.state.urlList[foundIndex].short_link)
        .then((e) => window.alert("Copied Link Successfully"))
        .catch((err) =>
          window.alert(
            "Your Browswer can't copy link. Try opening independently"
          )
        );
    }
  };

  render() {
    const validated = validateurl(this.state.url);

    return (
      <div className="bodyContainer">
        <div className="body-head">
          <h1>More than Shorter Links</h1>
        </div>

        <div className="body-content">
          <div className="body-content-input">
            <UrlInput
              placeholder="Enter Url"
              onChange={(e) => {
                this.setState({ url: e.target.value });
              }}
              validated={this.state.url ? validated : true}
              value={this.state.url}
              handleShorten={this.handleShorten}
            />
          </div>

          <div className="body-content-list">
            {this.state.urlList.map((shortened) => {
              return (
                <OutputElement
                  key={shortened.original_link}
                  original_link={shortened.original_link}
                  short_link={shortened.short_link}
                  onClickCopyURL={() =>
                    this.handleOnClickCopyURL(shortened.short_link)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
