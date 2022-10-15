import { Message } from 'components/styles/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Message>Home Page</Message>
    </main>
  );
}
