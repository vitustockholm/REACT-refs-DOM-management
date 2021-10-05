import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import Label from './Label';
import Input from './Input';

const Form = () => {
  // Hooks
  // -- state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // ---side effect
  useEffect(() => {
    console.log('userNameInputRef', userNameInputRef);
    console.log('emailInputRef', emailInputRef);
    console.log('sendButtonRef', sendButtonRef);
  }, []);
  // --- refs
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const sendButtonRef = useRef();
  //
  // Custom functions
  // --- helper

  //---input validatin
  const handleUserNameOnChange = () => {
    const input = userNameInputRef.current;
    // console.log('input', input);
    // console.log(input.value.charAt(0));
    //
    if (input.value.charAt(0) === input.value.charAt(0).toUpperCase()) {
      input.style.border = '1px solid green';
    } else {
      input.style.border = '1px solid red';
    }
    if (!input.value.length) input.style.border = '1px solid black';
    setUsername(input.value);
  };
  //
  const handleEmailOnChange = () => {
    const input = emailInputRef.current;
    // console.log('input', input);
    // console.log(input.value.charAt(0));
    //
    if (input.value.includes('@')) {
      input.style.border = '1px solid green';
    } else {
      input.style.border = '1px solid red';
    }
    if (!input.value.length) input.style.border = '1px solid black';

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
