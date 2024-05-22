import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: ''
    };
  }

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  handleInputChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateEmail(this.state.email);
    if (this.state.email === '') {
      this.setState({ emailError: 'Email is required' });
    } else if (this.state.email.length < 5) {
      this.setState({ emailError: 'Email is too short' });
    } else if (this.state.email.length > 50) {
      this.setState({ emailError: 'Email is too long' });
    } else if (!isValid) {
      this.setState({ emailError: 'Email is invalid' });
    } else {
      this.setState({ emailError: '' });
      // process form
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <div style={{ color: 'red' }}>{this.state.emailError}</div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { EmailForm };