import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const mbStyle = {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '5px',
      backgroundColor: 'lightpink',
      color: 'white',
    };

    const buttonStyle = {
      backgroundColor: 'pink',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    };

    const inputStyle = {
      color: 'black',
      padding: '5px',
      borderRadius: '3px',
      border: '1px solid gray',
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb" style={mbStyle}>
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            style={inputStyle}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            type="text"
            className="form-control"
            id="Name"
          />
        </div>
        <div className="mb" style={mbStyle}>
          <label htmlFor="Number" className="form-label">
            Number
          </label>
          <input
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            type="number"
            className="form-control"
            id="Number"
          />
        </div>
        <button style={buttonStyle} type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
