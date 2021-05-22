import React from "react";
import Sankey from "../sankey-chart/Sankey";
import FormComponent from "../form/FormComponent";
import PropTypes from "prop-types";

const HomePage = ({ onSubmitCallback, data }) => {
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

HomePage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  onSubmitCallback: PropTypes.func.isRequired,
};

export default HomePage;
