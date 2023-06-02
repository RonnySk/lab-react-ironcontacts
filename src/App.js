import contactsJson from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJson);

  const contactsArr = contacts.slice(0, 4);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Picture</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
        </tr>
        {contactsArr.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} width={50} alt={contact.name} />{" "}
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td>🏆</td> : null}
              {contact.wonEmmy ? <td>🏆</td> : null}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
