import React from 'react';

const contactsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(555) 555-5555'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '(555) 555-1234'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    phone: '(555) 555-6789'
  }
];

const Contacts = () => {
  return (
    <div className=" p-8  ">
    <div className="contacts-container p-20 text-white">
      <h2>Contact List</h2>
      <ul>
        {contactsData.map(contact => (
          <li key={contact.id} className="contact-item">
            <h3>{contact.name}</h3>
            <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Contacts;


