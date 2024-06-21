import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/GlobalContext';
import Form from '../Components/Form';

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={theme === 'light' ? 'contact light' : 'contact dark'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
