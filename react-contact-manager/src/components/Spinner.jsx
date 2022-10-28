import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <button className="btn btn-secondary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default Spinner;
