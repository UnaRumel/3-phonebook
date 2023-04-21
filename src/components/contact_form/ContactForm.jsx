import { Component } from 'react';
import { ContainerForm, ContainerInput } from './ContactForm.styled';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm = (name, number) => {
    name.value = '';
    number.value = '';
    this.setState({ name: '', number: '' });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.props.addContact(this.state.name, this.state.number);
    this.resetForm(name, number);
  };

  render() {
    return (
      <ContainerForm action="" onSubmit={this.handleOnSubmit}>
        <ContainerInput htmlFor="" name="name">
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContainerInput>
        <ContainerInput htmlFor="" name="number">
          Number
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContainerInput>

        <button type="submit">Add contact</button>
      </ContainerForm>
    );
  }
}

export default ContactForm;
