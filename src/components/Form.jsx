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

  // ---- side effects
  useEffect(() => {
    if (submit.username && submit.email) {
      sendButtonRef.current.disabled = false;
    } else {
      sendButtonRef.current.disabled = true;
    }
    console.log(username);
  }, [submit]);

  // --- refs
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const sendButtonRef = useRef();

  // Custom functions
  // --- helper validating clean coding
  const validationHelper = (input, rule, element) => {
    if (rule) {
      input.style.border = '1px solid green';

      setSubmit({ ...submit, ...element });
    } else {
      input.style.border = '1px solid red';
    }
    if (!input.value.length) input.style.border = '1px solid black';
  };

  //---inputs validatin
  const handleUserNameOnChange = () => {
    const input = userNameInputRef.current;

    const rule = input.value.charAt(0) === input.value.charAt(0).toUpperCase();
    validationHelper(input, rule, { username: true });

    setUsername(input.value);
    console.log(input);
  };
  //
  const handleEmailOnChange = () => {
    const input = emailInputRef.current;
    // console.log('input', input);
    // console.log(input.value.charAt(0));
    //
    // if (input.value.includes('@')) {
    //   input.style.border = '1px solid green';
    // } else {
    //   input.style.border = '1px solid red';
    // }
    // if (!input.value.length) input.style.border = '1px solid black';
    const rule = input.value.includes('@');
    validationHelper(input, rule, { email: true });

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
          ref={userNameInputRef}
          value={username}
          onChange={handleUserNameOnChange}
        />
      </div>
      <div>
        <Label name='email' text='Enter your email' />
        <br />
        <Input
          type='Send'
          id='email'
          ref={emailInputRef}
          value={email}
          onChange={handleEmailOnChange}
        />
      </div>
      <div>
        <Button
          text='Send'
          ref={sendButtonRef}
          action={() => alert('Sended')}
          primary
        />
        <Button text='Cancel' action={() => alert('Canceled')} secondary />
      </div>
    </form>
  );
};

export default Form;
