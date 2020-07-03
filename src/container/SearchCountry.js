import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  countryNameAction,
  searchCountryAction,
  sumbitBtnAction,
} from '../store/actionCreator';
import { Container, TextField, Button } from '@material-ui/core';

class SearchCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  handleChange = (value) => {
    this.props.searchCountryAction(value);

    this.setState({
      ...this.state,
      error: '',
    });
  };

  componentDidUpdate(previousProps, previousState, screenShot) {
    if (this.props.countryNameList.length) {
      this.props.history.push(
        `/${this.props.countryNameList[0].name}/${this.props.countryNameList[0].alpha2Code}`
      );
    }
  }

  handleSubmit = () => {
    this.props.sumbitBtnAction();
    if (this.props.searchText.length <= 3) {
      this.setState({
        ...this.state,
        error: 'Please Enter more than 3 Letter Country Name',
      });
    } else if (this.props.searchText && this.props.searchText.length > 3) {
      this.props.countryNameAction(this.props.searchText);
    }
  };

  render() {
    const { error } = this.state;
    return (
      <>
        {this.props.loading ? (
          <h2>Loading...</h2>
        ) : (
          <Container>
            <TextField
              id="standard-basic"
              value={this.props.searchText}
              label="Enter Country Name"
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!this.props.searchText}
              style={{ marginTop: '15px', marginLeft: '20px' }}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>

            {error && <div style={{ color: 'red' }}>{error}</div>}
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryNameList: state.countryNameList,
    searchText: state.searchText,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  countryNameAction,
  searchCountryAction,
  sumbitBtnAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountry);
