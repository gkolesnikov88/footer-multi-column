import React, { FormEventHandler, useState } from "react";
import "./_newsletter.css";
import Toast from "./Toast";

const Newsletter = () => {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastText, setToastText] = useState("");
  const checkValidity = (el: React.ChangeEvent<HTMLInputElement>) => {
    const validity = el.target.validity;
    if (validity.valid) {
      setEmailError("");
    } else if (validity.typeMismatch) {
      setEmailError("Please enter valid email address.");
    } else if (validity.valueMissing) {
      setEmailError("Email address is required");
    }
  };

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const options: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'appliaction/json' },
      body: JSON.stringify({
        email: email
      })
    }

    const responce = await fetch(
      'https://www.greatfrontend.com/api/projects/challenges/newsletter',
      options
    );
    
    setShowToast(true);
    // console.log(await responce.json());
    if(!responce.ok) {
      setToastHeader("Error");
      setToastText("Failed to submit. Please ensure your details are correct or try again later.");
    } else {
      setToastHeader("Success");
      setToastText("Subscription successful! Please check your email to confirm.");
    }
    
  }

  return (
    <>
      {showToast && <Toast
        header={toastHeader}
        text={toastText}
      />}    
      <div className="newsletter">
        <div className="newsletter__content">
          <h2 className="newsletter__content__title">Join our newsletter</h2>
          <p className="newsletter__content__message">
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={submitForm}>
          <div className="newsletter__form__input-wrapper">
            <input
              placeholder="Enter your email"
              className="input__field"
              type="email"
              id="email"
              value={email}
              onChange={(el) => setEmail(el.target.value)}
              required
              aria-describedby="input__error"
              onInput={checkValidity}
            />
            <p
              className={`input__error ${emailError ? "input__error--show" : ""}`}
              id="email-error"
            >
              {emailError}
            </p>
          </div>
          <div className="newsletter__form__btn">
            <button className="btn btn--primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
