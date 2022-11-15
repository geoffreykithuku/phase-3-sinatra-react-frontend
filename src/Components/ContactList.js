import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchValue, setsearchValue] = useState("");
  console.log(searchValue);
  useEffect(() => {
    fetch("https://sinatra-react-project-phase-3.herokuapp.com/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, [searchValue]);

  function handleDelete(id) {
    fetch(
      `https://sinatra-react-project-phase-3.herokuapp.com/contacts/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        setContacts((contacts) => contacts.filter((item) => item.id !== id));
      });
  }
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setsearchValue((searchValue) => query);
    fetch(
      `https://sinatra-react-project-phase-3.herokuapp.com/contacts/${query}`
    )
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }

  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"></i>
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        // onClick={handleSubmit}
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {contacts.map((item) => (
                <Card
                  key={item.id}
                  contact={item}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContactList;
