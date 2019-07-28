import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Actions
import { setToken, toggleTokenModal } from "./actions";

class TokenModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  toggle = () => {
    this.props.toggleTokenModal(); // eslint-disable-line
  };

  setTokenRedux = () => {
    const { token } = this.state;
    this.props.setToken(token); // eslint-disable-line
    this.toggle();
  };

  onChange = evt => {
    this.setState({ token: evt.target.value });
  };

  render() {
    const { opened } = this.props;

    return (
      <div>
        <Modal centered isOpen={opened} toggle={() => this.toggle()}>
          <ModalBody>
            <InputGroup>
              <Input
                onChange={this.onChange}
                placeholder="Please put your Token here, Thanks!"
              />
              <InputGroupAddon addonType="append">
                <Button
                  className="btn-primary-green"
                  style={{ width: "100px" }}
                  onClick={() => this.setTokenRedux()}
                >
                  Save
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

TokenModal.propTypes = {
  setToken: PropTypes.func.isRequired,
  toggleTokenModal: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setToken,
      toggleTokenModal
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    opened: state && state.generalReducer ? state.generalReducer.opened : false
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenModal);
