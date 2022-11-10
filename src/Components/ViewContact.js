import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ViewContact() {
  const { contactId } = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9292/contacts/${contactId}`)
      .then((res) => res.json())
      .then((item) => setContact(item));
  }, [contactId]);

  return (
    <React.Fragment>
      <section className="view-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-centre">
            <div className="col-md-4">
              <img
                src={contact.photo}
                alt=""
                className="contact-img"
              ></img>
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">{contact.name}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Phone : <span className="fw-bold">{contact.phone}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bold">{contact.email}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bold">{contact.company_name}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bold">{contact.title}</span>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ViewContact;
