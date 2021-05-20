import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formHeader } from "./../config.json";

const FormView = ({ onSubmitCallback }) => (
  <div className="container">
    <h2>{formHeader}</h2>
    <Formik
      initialValues={{ income: "", expenditure: "", amount: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.income && !values.expenditure) {
          errors.income = "Either income or expenditure are required";
        }
        if (!values.amount) {
          errors.amount = "Amount is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmitCallback(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-group">
          <div>
            <label htmlFor="formControlInput1">Income</label>
            <Field
              type="text"
              name="income"
              className="form-control"
              id="formControlInput1"
            />
          </div>
          <br />
          <div>
            <label htmlFor="formControlInput2">Expenditure</label>
            <Field
              type="text"
              name="expenditure"
              className="form-control"
              id="formControlInput2"
            />
          </div>
          <div>
            <ErrorMessage name="income" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="formControlInput3">Amount</label>
            <Field
              type="number"
              name="amount"
              className="form-control"
              id="formControlInput3"
            />
          </div>
          <div>
            <ErrorMessage name="amount" component="div" />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormView;