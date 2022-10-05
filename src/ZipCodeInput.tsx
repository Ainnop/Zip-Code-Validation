import React from "react";

interface ZipCodeInputProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  zipcode: string;
  changeZipCode: (event: React.FormEvent<HTMLInputElement>) => void;
  validation: string;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = (props) => {
  const { handleSubmit, zipcode, changeZipCode, validation } = props;

  return (
    <div className="container">
      <div className="container__item">
        <form onSubmit={handleSubmit} className="form" autoComplete="on">
          <input
            className="form__field"
            type="text"
            value={zipcode}
            placeholder="Enter US Zip Code"
            onChange={changeZipCode}
          />
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase"
          >
            Validate
          </button>
          <br />
          <div className="container__item container__item--bottom">
            <p>{validation}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ZipCodeInput;
