import React from "react";
import { ErrorMessage, useField } from "formik";

interface props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const FormInput: React.FC<props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form mb-3">
      <label htmlFor={field.name}>
        {label}
      </label>
      <div className="con">
        <input
          className={`${
            meta.touched && meta.error && "is-invalid"
          } form-control`}
          {...field}
          {...props}
          autoComplete="off"
        />
      </div>
      <ErrorMessage component="div" name={field.name} className="errorMsg" />
    </div>
  );
};

export default FormInput;
