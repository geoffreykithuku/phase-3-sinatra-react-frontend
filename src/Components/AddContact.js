import React, { useState} from 'react';
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
  
  return (
    <div>AddContact</div>
  )
}

export default AddContact;