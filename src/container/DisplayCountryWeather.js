import React, { Component } from 'react';
import { getCountryWeather, countryNameAction } from '../store/actionCreator';
import { connect } from 'react-redux';

import DisplaySelectedWeather from './DisplaySelectedWeather';
import DisplaySelectedCountry from './DisplaySelectedCountry';
class DisplayCountryWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.countryNameAction(this.props.match.params.name);
  }

  handleCheckWeather = () => {
    this.props.getCountryWeather(this.props.match.params.name);
    this.setState({ ...this.state, checkWeatherBtn: true });
  };

  render() {
    return (
      <>
        {this.props.loading ? (
          <h2>Loading ...</h2>
        ) : (
          <>
            {/* Display Selected Country Details */}
            <DisplaySelectedCountry
              handleCheckWeather={this.handleCheckWeather}
              countryNameList={this.props.countryNameList}
            />
            {/* Display Selected Country Weather Details */}
            <DisplaySelectedWeather weatherDetail={this.props.weatherDetail} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    weatherDetail: state.weatherDetail,
    countryNameList: state.countryNameList,
    loading: state.loading,
  };
};

const mapDispatchToProps = { getCountryWeather, countryNameAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCountryWeather);
