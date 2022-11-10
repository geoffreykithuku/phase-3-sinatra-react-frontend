import React from 'react';
import { Link } from "react-router-dom";

function Card({ contact, handleDelete }) {
 return (
    <div className="card">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={contact.photo}
              alt="user"
              className="img-fluid contact-img"
            ></img>
          </div>
          <div className="col-md-7">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                Name : <span className="fw-bold">{contact.name}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Phone : <span className="fw-bold">{contact.mobile}</span>
              </li>
              <li className="list-group-item list-group-item-action">
                Email : <span className="fw-bold">{contact.email}</span>
              </li>
            </ul>
          </div>
          <div className="col-md-1 d-flex flex-column align-items-center d-flex justify-content-around">
            <Link
              to={`/contacts/view/${contact.id}`}
              className="btn btn-warning my-1"
            >
              <i className="fa fa-eye"></i>
            </Link>
            <Link
              to={`/contacts/edit/${contact.id}`}
              className="btn btn-primary my-1"
            >
              <i className="fa fa-pen"></i>
            </Link>
            <button className="btn btn-danger my-1" onClick={()=>handleDelete(contact.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;