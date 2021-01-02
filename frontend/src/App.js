import Header from './components/Header'
import Footer from './components/Footer'
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <main>
          <h1>welcome to PS</h1>
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
