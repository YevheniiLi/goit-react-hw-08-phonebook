import { Formik, Form, ErrorMessage } from 'formik';
import { addNewUser } from 'redux/operationsAuth';
import { useDispatch } from 'react-redux';
import {
  FormButton,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   phone: yup.number().required(),
// });

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const SignUpPage = () => {
  const dispatch = useDispatch();

  const formSubmit = (value, { resetForm }) => {
    dispatch(addNewUser(value));
    console.log(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      // validationSchema={schema}
    >
      <Form>
        <label>
          Name
          <FormInput type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label>
          Email
          <FormInput type="email" name="email" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <label>
          Password
          <FormInput type="password" name="password" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <FormButton type="submit">SIGN UP</FormButton>
      </Form>
    </Formik>
  );
};
