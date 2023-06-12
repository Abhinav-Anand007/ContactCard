import React from "react";
import Card from "./Card";
import contacts from "../../Contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      url={contact.url}
      contact={contact.contact}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        url={contacts[0].url}
        contact={contacts[0].contact}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        url={contacts[1].url}
        contact={contacts[1].contact}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        url={contacts[2].url}
        contact={contacts[2].contact}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
