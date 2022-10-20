import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Form,
  FormLabel,
  Field,
  ErrorMessage,
  Button,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };
const validationSchema = yup.object({
  name: yup.string().required(),
  number: yup.string().required(),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

	handleAddContactSubmit = (values, ({resetForm})) => {

//    .this.props
//      .onSubmit(this.state);

		resetForm();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  render() {
    // const handlSubmit = (values, actions) => {
    //   console.log(values);
    //   console.log(actions);
    // };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleAddContactSubmit}
      >
        <Form>
          <FormLabel>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              component="input"
            />
            <ErrorMessage name="name" component="span" />
          </FormLabel>

          <FormLabel>
            <span>Number</span>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              component="input"
            />
            <ErrorMessage name="number" component="span" />
          </FormLabel>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    );
  }
}
