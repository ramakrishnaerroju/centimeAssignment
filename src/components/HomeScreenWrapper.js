import React, { useState, useEffect } from "react";
import Sankey from "./Sankey";
import FormComponent from "./FormComponent";
//import MockData from "./../assets/mock.json";
import { connect } from "react-redux";
import ActionTypes from "./../redux/actions/actionTypes";

const HomeScreenWrapper = ({
  sankeyData,
  getSankeyData,
  isSankeyDataLoading,
  sankeyDataFetchingErrorMessage,
}) => {
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

  return (
    <div className="container">
      <div className="row">
        <div className="form-container col-lg-6 col-sm-12">
          <FormComponent onSubmitCallback={onSubmitCallback} />
        </div>
        <div className="col-lg-6 col-sm-12 mb-4">
          <Sankey data={data} />
        </div>
      </div>
    </div>
  );
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
