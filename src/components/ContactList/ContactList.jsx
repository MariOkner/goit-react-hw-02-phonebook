export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {contacts.filter(({name}) => {
        return name.toLowerCase().includes(filter.toLowerCase())
      }).map(({id, name, number}) => (
        <li key={id}>
          {name}: {number}
          <button id={id} onClick={onDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
