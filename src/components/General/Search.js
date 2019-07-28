import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      typingTimeout: 0
    };
  }

  onChange = event => {
    const { typingTimeout } = this.state;
    const { search } = this.props;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const tmp = event.target.value;

    this.setState({
      value: tmp,
      typingTimeout: setTimeout(() => {
        search(tmp);
      }, 500)
    });
  };

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="search-row">
        <Input
          onChange={this.onChange}
          value={value}
          placeholder={placeholder}
          className="search-input"
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired, // eslint-disable-line
  placeholder: PropTypes.string
};

Search.defaultProps = {
  placeholder: ""
};
