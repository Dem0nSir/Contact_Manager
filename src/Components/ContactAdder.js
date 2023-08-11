import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };

    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the information");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h2>Contact adder:</h2>
        <br />
        <form onSubmit={onClickHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button className="click" onClick={onClickHandler}>
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
