import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

// import { deleteContact } from 'components/redux/contactSlice';
import { getContacts, getFilter } from 'components/redux/selectors';
import toast from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();

  // const allContacts = useSelector(getContacts);
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(items);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  const handleDeleteContact = id => {
    // dispatch(deleteContact(id));
    toast.success('Видалено');
  };

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Button type="submit" onClick={() => handleDeleteContact(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
