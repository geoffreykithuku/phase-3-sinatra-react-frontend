import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function ContactList(){

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
                            type="text"
                            className="form-control"
                            placeholder="Search Names"
                          ></input>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-2">
                          <input
                            type="submit"
                            className="btn btn-outline-dark"
                            value="Search"
                          ></input>
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
                    {contacts.map(item=><Card key={ item.id} contact={item} handleDelete={handleDelete}/>)}
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );

    }

    export default ContactList;

