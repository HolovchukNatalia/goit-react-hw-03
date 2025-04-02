import React from "react";
import Contact from "./Contact";
import css from "./style/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.listContact}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
