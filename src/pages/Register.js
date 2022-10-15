import { RegistredForm } from 'components/RegistredForm/RegistredForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegistredForm />
    </div>
  );
}
