import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddContact() {
    const navigate = useNavigate()
  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    title: "",
    mobile: "",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0g8R5VmgqDqpRCwQfw2Y9V-DM-iXS59R9hQ&usqp=CAU",
  });


function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://sammy-contact-manager.herokuapp.com/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) =>{
            navigate(`/contacts/view/${data.id}`)
      });

  }

  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contact.name}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        name: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo url"
                    value={contact.photo}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        photo: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    value={contact.mobile}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        mobile: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        email: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    value={contact.company}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        company: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={contact.title}
                    onChange={(e) =>
                      setContact((contact) => ({
                        ...contact,
                        title: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  ></input>
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AddContact;