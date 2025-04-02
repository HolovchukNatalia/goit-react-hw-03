import React, { useId } from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{7,11}$/, "Number must be 7-11 digits")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <br />
            <Field type="text" name="name" id={nameId} />
            {errors.name && touched.name && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.name}
              </div>
            )}
          </div>
          <div>
            <label htmlFor={numberId}>Number</label>
            <br />
            <Field type="text" name="number" id={numberId} />
            {errors.number && touched.number && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {errors.number}
              </div>
            )}
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
