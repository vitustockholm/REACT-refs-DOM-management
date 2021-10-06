import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import Label from './Label';
import Input from './Input';

const Form = () => {
  // Hooks
  // -- state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [submit, setSubmit] = useState({ username: false, email: false });

  // side effects
  useEffect(() => {
    if (submit.username && submit.email) {
      sendButtonRef.current.disabled = false;
    } else {
      sendButtonRef.current.disabled = true;
    }

    console.log(submit);
  }, [submit]);

  // -- ref
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const sendButtonRef = useRef();

  // Custom functions
  // -- helper
  const validationHelper = (input, rule, el) => {
    let object = {};

    if (rule) {
      input.style.border = '2px solid green';
      object[el] = true;

      setSubmit({ ...submit, ...object });
    } else {
      input.style.border = '2px solid red';
      object[el] = false;

      setSubmit({ ...submit, ...object });
    }

    if (!input.value.length) input.style.border = '1px solid black';
  };
  // -- inputs validationa
  const handleUsernameOnChange = () => {
    const input = usernameInputRef.current;
    const rule = input.value.charAt(0) === input.value.charAt(0).toUpperCase();
    validationHelper(input, rule, 'username');

    setUsername(input.value);
  };

  const handleEmailOnChange = () => {
    const input = emailInputRef.current;
    const rule = input.value.includes('@');
    validationHelper(input, rule, 'email');

    setEmail(input.value);
  };

  return (
    <form>
      <div>
        <Label name='username' text='Enter your username' />
        <br />
        <Input
          type='text'
          id='username'
          ref={usernameInputRef}
          value={username}
          onChange={handleUsernameOnChange}
        />
      </div>
      <div>
        <Label name='email' text='Enter your email' />
        <br />
        <Input
          type='text'
          id='email'
          ref={emailInputRef}
          value={email}
          onChange={handleEmailOnChange}
        />
      </div>
      <div>
        <Button
          text='Send'
          action={() => alert('Sended')}
          primary
          ref={sendButtonRef}
        />
        <Button text='Cancel' action={() => alert('Canceled')} secondary />
      </div>
    </form>
  );
};

export default Form;
