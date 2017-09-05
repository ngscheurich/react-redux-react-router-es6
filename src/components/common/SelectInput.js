import React, { PropTypes } from 'react'

const SelectInput = ({name, label, options, onChange, defaultOption, value, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className='form-control'
        value={value}
        onChange={onChange}>
        <option>{defaultOption || '' }</option>
        {options.map(a => {
          return <option key={a.value} value={a.value}>{a.text}</option>
        })}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.string
}

export default SelectInput
