// COMPONENTS
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//STYLED
import { TitlePhonebook, TitleContacts, ContainerWrapper } from './App.styled';

// NOTIFY
import { Toaster } from 'react-hot-toast';
import { toastConfig } from 'components/toastConfig';

// TOOLKIT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//ACTIONS-MOVEMENT
import { selectIsLoading, selectError } from './redux/selectors';
import { fetchContacts } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerWrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      <ContactList />
      <Toaster {...toastConfig} />
    </ContainerWrapper>
  );
};

export { App };
