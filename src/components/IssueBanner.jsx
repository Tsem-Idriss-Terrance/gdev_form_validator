import React from "react";

const IssueBanner = () => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show mobile-d-none"
      role="alert"
    >
      <div>
        <span>
          If you've found a bug or have any feedback, we’d love to hear from
          you! Click the button below to raise an issue on GitHub and help us
          improve Gdev Form Validator.
        </span>
      </div>
      <a
        className="btn btn-primary"
        href="https://github.com/GlyphDev-com/Gdev-Form-Validator/issues/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        Raise an issue
      </a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default IssueBanner;
