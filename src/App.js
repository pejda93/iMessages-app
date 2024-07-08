import { useState } from "react";
import database from "./database";

function formatDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const messageDate = new Date(date);

  const isToday = now.toDateString() === messageDate.toDateString();
  const isThisWeek =
    now - messageDate < 7 * 24 * 60 * 60 * 1000 &&
    now.getDay() >= messageDate.getDay();

  if (isToday) {
    const hours = messageDate.getHours().toString().padStart(2, "0");
    const minutes = messageDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  } else if (isThisWeek) {
    return daysOfWeek[messageDate.getDay()];
  } else {
    const day = messageDate.getDate().toString().padStart(2, "0");
    const month = (messageDate.getMonth() + 1).toString().padStart(2, "0"); // Meseci idu od 0 do 11
    const year = messageDate.getFullYear().toString().slice(-2); // Zadnje dve cifre godine
    return `${day}/${month}/${year}`;
  }
}

function formatMessageDate(date) {
  const now = new Date();
  const messageDate = new Date(date);

  const isSameDay = now.toDateString() === messageDate.toDateString();
  const isYesterday =
    new Date(now.setDate(now.getDate() - 1)).toDateString() ===
    messageDate.toDateString();
  const isSameWeek =
    now - messageDate < 7 * 24 * 60 * 60 * 1000 &&
    now.getDay() >= messageDate.getDay();

  const options = { hour: "2-digit", minute: "2-digit" };

  if (isSameDay) {
    return messageDate.toLocaleTimeString([], options);
  } else if (isYesterday) {
    return `Yesterday at ${messageDate.toLocaleTimeString([], options)}`;
  } else if (isSameWeek) {
    return `${messageDate.toLocaleDateString("en-GB", {
      weekday: "long",
    })} at ${messageDate.toLocaleTimeString([], options)}`;
  } else {
    return `${messageDate.toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })} at ${messageDate.toLocaleTimeString([], options)}`;
  }
}

export default function App() {
  const [contacts, setContacts] = useState(database);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [search, setSearch] = useState("");

  function handleSelection(contact) {
    // setSelectedFriend(friend);
    setSelectedContact((cur) => (cur?.name === contact.name ? null : contact));
  }

  function handleShowNewMessage() {
    setShowNewMessage((show) => !show);

    if (showNewMessage === true) {
      setSelectedContact(null);
    }
  }

  function handleReceiverInput(receiver, submit) {
    const result = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === receiver.toLocaleLowerCase()
    );

    if (result && submit) {
      setShowNewMessage(false);
      setSelectedContact(result);
      return;
    } else {
      setSelectedContact(receiver);
    }
  }

  function addMessage(newMessage) {
    setContacts((prevDatabase) => {
      return prevDatabase.map((contact) => {
        if (contact.name === selectedContact.name) {
          contact.messages = [...contact.messages, newMessage];
        }
        return contact;
      });
    });
  }

  function handleSendMessage(message) {
    message = message.trim();
    const newMessage = { time: new Date(), sent: true, text: `${message}` };
    if (typeof selectedContact === "object" && selectedContact !== null) {
      addMessage(newMessage);
      return;
    } else {
      const id = crypto.randomUUID();
      const newContact = {
        id: id,
        name: `${selectedContact}`,
        image: `https://i.pravatar.cc/48?u=${id}`,
        messages: [newMessage],
      };
      setContacts((contacts) => [...contacts, newContact]);
      setSelectedContact(newContact);
      setShowNewMessage(false);
    }
  }

  function handleSearch(input) {
    setSearch(input);
  }

  return (
    <div className="app">
      {!selectedContact && !showNewMessage && (
        <div className="main">
          <Title onClick={handleShowNewMessage} />
          <SearchBox onSearch={handleSearch} search={search} />
          <ContactList
            contactList={contacts}
            onSelection={handleSelection}
            searchInput={search}
          />
        </div>
      )}

      {showNewMessage && (
        <div className="new-message">
          <NewMessage
            onClick={handleShowNewMessage}
            onReceiverInput={handleReceiverInput}
          />
          <InputBox
            selectedContact={selectedContact}
            onSend={handleSendMessage}
          />
        </div>
      )}

      {selectedContact && (
        <div className="message-view">
          <MessageView
            selectedContact={selectedContact}
            onSelection={handleSelection}
          />
          <Messages selectedContact={selectedContact} />
          <InputBox
            selectedContact={selectedContact}
            onSend={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
}

function Title({ onClick }) {
  return (
    <div className="main-header">
      <h1 className="title">Messages</h1>
      <ion-icon name="create-outline" onClick={() => onClick()}></ion-icon>
    </div>
  );
}

function SearchBox({ onSearch, search }) {
  function handleChange(e) {
    e.preventDefault();

    onSearch(e.target.value);
  }

  return (
    <form className="search-box">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={search}
      />
      <ion-icon name="mic-outline"></ion-icon>
    </form>
  );
}
function ContactList({ contactList, onSelection, searchInput }) {
  return (
    <ul className="contacts">
      {contactList
        .filter((contact) => contact.messages.length > 0)
        .filter((contact) => {
          return (
            contact.name
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) ||
            contact.messages.some((message) =>
              message.text
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase())
            )
          );
        })
        .sort((a, b) => {
          const latestMessageA = new Date(
            Math.max(...a.messages.map((msg) => msg.time))
          );
          const latestMessageB = new Date(
            Math.max(...b.messages.map((msg) => msg.time))
          );
          return latestMessageB - latestMessageA;
        })
        .map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            onSelection={onSelection}
          />
        ))}
    </ul>
  );
}

function Contact({ contact, onSelection }) {
  return (
    <div className="contact" onClick={() => onSelection(contact)}>
      <img src={contact.image} alt="contact" className="contact__image" />
      <div className="contact__text">
        <div className="contact__header">
          <h4 className="contact__name">{contact.name}</h4>
          <div className="contact__time">
            <span>
              {formatDate(
                contact.messages
                  .sort((a, b) => new Date(b.time) - new Date(a.time))[0]
                  .time.toISOString()
              )}
            </span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
        <p className="message-text">
          {
            contact.messages.sort(
              (a, b) => new Date(b.time) - new Date(a.time)
            )[0].text
          }
        </p>
      </div>
    </div>
  );
}

function MessageView({ selectedContact, onSelection }) {
  return (
    <div>
      <div className="chat">
        <div className="chat__header">
          <ion-icon
            name="chevron-back-outline"
            className="message-icons"
            onClick={() => onSelection(selectedContact)}
          ></ion-icon>
          <figure className="sender">
            <img
              src={selectedContact.image}
              alt="contact picture"
              className="sender__image"
            />

            <figcaption className="sender__name">
              <p>{selectedContact.name}</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </figcaption>
          </figure>
          <ion-icon
            name="videocam-outline"
            className="message-icons"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Messages({ selectedContact }) {
  //TODO namesti da pocetna pozicija scrolla bude na dnu
  const isMoreThanFiveMinutesLater = (date1, date2) => {
    const fiveMinutesInMillis = 5 * 60 * 1000;
    return date2.getTime() - date1.getTime() > fiveMinutesInMillis;
  };

  return (
    <div className="conversation">
      {selectedContact.messages
        ?.sort((a, b) => new Date(a.time) - new Date(b.time))
        .map((message, i) => {
          let stampTime = false;
          let isLast = false;

          if (
            i === 0 ||
            isMoreThanFiveMinutesLater(
              selectedContact.messages[i - 1].time,
              message.time
            )
          ) {
            stampTime = true;
          }

          if (
            i + 1 === selectedContact.messages.length ||
            message.sent !== selectedContact.messages[i + 1].sent ||
            (i > 0 &&
              isMoreThanFiveMinutesLater(
                message.time,
                selectedContact.messages[i + 1].time
              ))
          ) {
            isLast = true;
          }

          return (
            <Message message={message} stampTime={stampTime} isLast={isLast} />
          );
        })}
    </div>
  );
}

function Message({ message, stampTime, isLast }) {
  return (
    <div>
      <div className={`messages ${message.sent ? "sent" : "received"}`}>
        <div className="message">
          {stampTime && (
            <div className="message__time">
              {formatMessageDate(message.time)}
            </div>
          )}
          <p className={`message__text ${isLast ? "last" : ""}`}>
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function InputBox({ selectedContact, onSend }) {
  const [inputMessage, setInputMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (inputMessage === "") return;
    if (selectedContact === null) return;

    onSend(inputMessage);
    setInputMessage("");
  }

  return (
    <form className="message-input-box" onSubmit={handleSubmit}>
      <input
        className="message-input"
        type="text"
        placeholder="iMessage"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      {inputMessage === "" ? (
        <ion-icon
          name="mic-outline"
          style={{ color: "#808080", cursor: "pointer" }}
        ></ion-icon>
      ) : (
        <ion-icon
          name="arrow-up-circle"
          className="message-submit"
          style={{
            color: selectedContact ? "#007aff" : "#808080",
            cursor: "pointer",
          }}
          onClick={selectedContact ? handleSubmit : null}
        ></ion-icon>
      )}
    </form>
  );
}

function NewMessage({ onClick, onReceiverInput }) {
  function handelSubmit(e) {
    e.preventDefault();
    onReceiverInput(e.target[0].value, true);
  }

  function handleChange(e) {
    e.preventDefault();

    if (!e.target.value) return;

    onReceiverInput(e.target.value, false);
  }

  return (
    <div className="new-message__open">
      <div className="new-message__header">
        <h3>New Message</h3>
        <p onClick={() => onClick()}>Cancel</p>
      </div>
      <form className="new-message__receiver" onSubmit={handelSubmit}>
        <label>To:</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}
