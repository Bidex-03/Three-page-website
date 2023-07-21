import React, { useState, useRef } from "react";

import Card from "../UI/Card";

const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const nameRegex = /[a-zA-Z]/;

const isEmail = (value) => emailRegex.test(value);
const isEmpty = (value) => value.trim() === "";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [formValidity, setFormValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submissionHandler = async (e) => {
    e.preventDefault();

    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;
    const messageValue = messageInputRef.current.value;

    const details = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    const enteredNameIsValid = !isEmpty(nameValue);
    const enteredMEmailIsValid = isEmail(emailValue);
    const enteredMessageIsValid = !isEmpty(messageValue);

    setFormValidity({
      name: enteredNameIsValid,
      email: enteredMEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredMEmailIsValid && enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }

    setIsSubmitting(true);

    const res = await fetch(
      "https://contact-message-details-default-rtdb.firebaseio.com/message.json",
      {
        method: "POST",
        body: JSON.stringify({ details }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  // Dynamic class for input fields
  const inputClasses =
    "text-Marine-blue font-semibold mt-2 mb-1 px-4 py-2 rounded-[5px] bg-grey focus:outline-none resize-none";

  // Popup modal
  const formModalContent = (
    <React.Fragment>
      <h1 className="mb-4 text-center text-Purplish-blue text-sm md:text-xl lg:text-xl font-semibold">
        CONTACT US
      </h1>

      <div className="flex flex-col mb-3">
        <label htmlFor="name" className="text-Purplish-blue font-semibold">
          Name
        </label>
        <input type="name" className={inputClasses} ref={nameInputRef} />
        {!formValidity.name && (
          <p className="text-Strawberry-red">Please enter a valid name!</p>
        )}
      </div>

      <div className="flex flex-col mb-3">
        <label htmlFor="email" className="text-Purplish-blue font-semibold">
          Email
        </label>
        <input type="email" className={inputClasses} ref={emailInputRef} />
        {!formValidity.email && (
          <p className="text-Strawberry-red">
            Please enter a valid email address!
          </p>
        )}
      </div>

      <div className="flex flex-col mb-3">
        <label htmlFor="message" className="text-Purplish-blue font-semibold">
          Message
        </label>
        <textarea
          type="message"
          rows="4"
          className={inputClasses}
          ref={messageInputRef}
        />
        {!formValidity.message && (
          <p className="text-Strawberry-red">Please enter a valid message!</p>
        )}
      </div>

      <button
        className="w-[100%] bg-Purplish-blue text-center text-xl text-White py-2 rounded-[5px] hover:bg-Marine-blue cursor-pointer"
        onClick={submissionHandler}
      >
        Submit
      </button>
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending feedback data...</p>;

  const didSubmitModalContent = <p>Successfully sent the message!</p>;

  return (
    <Card className="w-[80%] md:w-[50%] lg:w-[30%] bg-pastel-blue m-auto mt-4 p-4 flex flex-col">
      {!isSubmitting && !didSubmit && formModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Card>
  );
};

export default ContactPage;
