import React from "react";
import { useFormik } from "formik";

export default function MyForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors = {};
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (!validRegex.test(values.email)) {
        errors.email = "Invalid email format";
      }

      if (!values.channel) {
        errors.channel = "Required";
      }

      return errors;
    },
  });
  console.log("errors", formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="Form-control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <div className="Form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>
        <div className="Form-control">
          <label htmlFor="channel">Channel</label>
          <input
            id="channel"
            name="channel"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
