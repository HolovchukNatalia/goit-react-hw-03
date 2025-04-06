import React, { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .trim()
    .max(50, "Too Long!")
    .trim()
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{7,11}$/, "Number must be 7-11 digits")
    .trim()
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
      {({ isSubmit, isValid }) => (
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <br />
            <Field type="text" name="name" id={nameId} />
            <br />
            <ErrorMessage
              className={css.error}
              component="div"
              name="name"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor={numberId}>Number</label>
            <br />
            <Field type="text" name="number" id={numberId} />
            <br />
            <ErrorMessage
              className={css.error}
              component="div"
              name="number"
            ></ErrorMessage>
          </div>
          <button type="submit" disabled={isSubmit || !isValid}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
