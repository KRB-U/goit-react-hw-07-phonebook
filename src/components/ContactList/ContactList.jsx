import { useDispatch, useSelector } from 'react-redux';
import { Button, ContactItem } from './ContactList.styled';

import { deleteContact } from 'components/redux/operations';
import { selectVisibleContacts } from 'components/redux/selectors';
import toast from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

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
