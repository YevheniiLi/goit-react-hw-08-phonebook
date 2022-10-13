import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operationsAuth';
import {
  FormButton,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   phone: yup.number().required(),
// });

const initialValues = {
  email: '',
  password: '',
};

export const LogInPage = () => {
  const dispatch = useDispatch();

  const formSubmit = (value, { resetForm }) => {
    dispatch(logInUser(value));
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
          Email
          <FormInput type="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </label>
        <br />
        <label>
          Password
          <FormInput type="password" name="password" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <FormButton type="submit">LOG IN</FormButton>
      </Form>
    </Formik>
  );
};
