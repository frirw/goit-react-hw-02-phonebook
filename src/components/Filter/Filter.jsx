import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor="filter" style={labelStyle}>
      Find contacts by name
    </label>
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      id="filter"
      style={inputStyle}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: 'white',
  backgroundColor: 'lightpink',
};

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  boxSizing: 'border-box',
};
