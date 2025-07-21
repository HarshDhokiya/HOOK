import React, { useRef } from 'react';

function FormWithRefs() {
  const userRef = useRef();
  const passRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", userRef.current.value);
    console.log("Password:", passRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={userRef} type="text" placeholder="Enter username" />
      <br /><br />
      <input ref={passRef} type="password" placeholder="Enter password" />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormWithRefs;