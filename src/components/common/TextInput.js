import React, { PropTypes } from 'react'

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        name={name}
        className={error ? 'form-control is-invalid' : 'form-control'}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      <div className="invalid-feedback">{error}</div>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput
