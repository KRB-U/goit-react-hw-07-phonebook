import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//STYLED
import { TitlePhonebook, TitleContacts, ContainerWrapper } from './App.styled';

// NOTIFY
import { Toaster } from 'react-hot-toast';
import { toastConfig } from 'components/toastConfig';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from './redux/selectors';
import { fetchContacts } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />

      {/* {isLoading && <ContactList />} */}
      {/* {error && <p>{error}</p>} */}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>

      <Toaster {...toastConfig} />
    </ContainerWrapper>
  );
};

export { App };
