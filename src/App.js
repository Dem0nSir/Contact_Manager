import React, { useState } from "react";
import Contact from "./Components/Contact";
import "./styles/app.css";
import ContactAdder from "./Components/ContactAdder";
import NavBar from "./Components/NavBar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContact = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list" style={{}}>
        <h3>Contact List:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContact} style={{ background: "#eb1700" }}>
          Clear All Contact
        </button>
      </div>
    </>
  );
};

export default App;
