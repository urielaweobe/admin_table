import { useState } from "react"

const FormInput = (props) => {
    const {label, errorMessage, onChange, ...inputProps} = props;

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
      setFocused(true)
    }

  return (
    <div className="form-group">
        <label>{label}</label>
        <input 
        className="form-control input__check"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        />
        <span className="errorMsg">{errorMessage}</span>
    </div>
  )
}

export default FormInput