import React from "react";
import './_newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__content__title">Join our newsletter</h2>
        <p className="newsletter__content__message">
          We’ll send you a nice letter once per week. No spam.
        </p>
      </div>
      <form className="newsletter__form" action="">
        <div className="newsletter__form__input-wrapper">
          <input
            placeholder="Enter your email"
            className="input__field"
            type="email"
            id="email"
            required
            aria-describedby="input__error"
          />
          <p className="input__error" id="email-error"></p>
        </div>
        <div className="newsletter__form__btn">
            <button className="btn btn--primary" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
