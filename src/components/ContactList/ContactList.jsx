import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

// import { deleteContact } from 'components/redux/contactSlice';
import { deleteContact } from 'components/redux/operations';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import toast from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Видалено');
  };

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, avatar, id }) => (
          <ContactItem key={id}>
            {name}: {avatar}
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
