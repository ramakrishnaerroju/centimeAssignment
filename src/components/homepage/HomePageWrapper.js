import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ActionTypes from "../../redux/actions/actionTypes";
import PropTypes from "prop-types";
import HomePage from "./HomePageView";
/**
 *
 * if we use mock data
 * import MockData from "./../assets/mock.json";
 */

const HomeScreenWrapper = ({
  sankeyData,
  getSankeyData,
  isSankeyDataLoading,
  sankeyDataFetchingErrorMessage,
}) => {
  // Keeping below local state to add new data through form
  const [data, setData] = useState(null);

  useEffect(() => {
    getSankeyData();
  }, [getSankeyData]);

  useEffect(() => {
    if (sankeyData) {
      setData(sankeyData);
    }
  }, [sankeyData]);

  if (sankeyDataFetchingErrorMessage) {
    return (
      <div>
        <h2>{sankeyDataFetchingErrorMessage}</h2>
      </div>
    );
  }

  const onSubmitCallback = (values) => {
    // add the values to data array to update Sankey
    let newItem = Object.values(values);
    setData([...data, newItem]);
  };

  if (isSankeyDataLoading === undefined || isSankeyDataLoading === true) {
    return <div>Loading data from server...</div>;
  }

  return <HomePage onSubmitCallback={onSubmitCallback} data={data} />;
};

HomeScreenWrapper.propTypes = {
  sankeyData: PropTypes.arrayOf(PropTypes.any),
  isSankeyDataLoading: PropTypes.bool,
  sankeyDataFetchingErrorMessage: PropTypes.string,
  getSankeyData: PropTypes.func.isRequired,
};

HomeScreenWrapper.defaultProps = {
  isSankeyDataLoading: false,
  sankeyDataFetchingErrorMessage: "",
};

const mapStateToProps = (state) => {
  const sankeyData = state.sankeyDataReducer;
  const isSankeyDataLoading =
    state.loaderReducer[ActionTypes.getSankeyDataProcess];
  const sankeyDataFetchingErrorMessage =
    state.errorReducer[ActionTypes.getSankeyDataProcess];

  return { sankeyData, isSankeyDataLoading, sankeyDataFetchingErrorMessage };
};

const mapDispatchToProps = (dispatch) => ({
  getSankeyData: () => dispatch(ActionTypes.getSankeyDataProcessRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenWrapper);
