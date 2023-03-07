import React from "react";
import "./passwordRequirements.css";

const PasswordRequirements = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}) => {
  return (
    <>
      <div className="req-style mt-2">
        <p className={capsLetterFlag}>&nbsp;*חייב להכיל אות גדולה באנגלית</p>
        <p className={numberFlag}> &nbsp;*חייב להכיל לפחות 4 ספרות</p>
        <p className={pwdLengthFlag}>&nbsp;*לפחות 8 תווים</p>
        <p className={specialCharFlag}>
          &nbsp;*חייב להכיל אחד מהסימנים !@#$%^&*-_
        </p>
      </div>
    </>
  );
};

export default PasswordRequirements;
