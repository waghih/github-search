import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({
  value, onChange, onKeyPress, error, placeholder,
}) => (
  <div className="search-container">
    <input
      className={`form-control form-control-lg mb-1 ${error ? 'form-control-error' : ''}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
    {error && <div className="form-error-messages">Search field cannot be blank</div>}
  </div>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

Searchbar.defaultProps = {
  error: false,
  placeholder: '',
};

export default Searchbar;
