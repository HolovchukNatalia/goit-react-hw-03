import React from "react";
import css from "./style/ContactList.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.contact}>
      <div>
        <p>{name}</p>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
