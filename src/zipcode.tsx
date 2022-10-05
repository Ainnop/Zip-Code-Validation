import React, { useState } from "react";
import ZipCodeInput from "./ZipCodeInput";

const ZipCode: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [validation, setValidation] = useState<string>("");
  const validateZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return zipCode === ""
      ? setValidation("Please enter US Zip Code")
      : validateZipCode
      ? setValidation("Correct US Zip Code")
      : setValidation("Incorrect US Zip Code");
  };

  const validateInput = (e: any) => {
    const hasNumberHypen = /^[0-9 -]+$/.test(e);
    if (hasNumberHypen) {
      setZipCode(e);
      setValidation("");
    } else {
      setZipCode("");
      setValidation("Only digits are allowed");
    }
  };

  return (
    <>
      <ZipCodeInput
        handleSubmit={handleSubmit}
        zipcode={zipCode}
        changeZipCode={(e: any) => validateInput(e.target.value)}
        validation={validation}
      />
    </>
  );
};

export default ZipCode;
