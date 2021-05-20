import React, { useState, useEffect } from "react";
import Sankey from "./Sankey";
import FormComponent from "./FormComponent";
//import MockData from "./../assets/mock.json";
import axios from "./../axios/axios";

const HomeScreenWrapper = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .getData()
      .then(({ data: { record } }) => {
        setData(record.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitCallback = (values) => {
    // add the values to data array to update Sankey
    let newItem = Object.values(values);
    setData([...data, newItem]);
  };

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

export default HomeScreenWrapper;
