

function EditContact(){

    return (
        <React.Fragment>
          <section className="add-contact p-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="h4 text-primary fw-bold">Edit Contact</p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
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
                        className="btn btn-primary"
                        value="Update"
                      ></input>
                      <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img src={contact.photo} alt="user" className="contact-img"></img>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
}

export default EditContact;
