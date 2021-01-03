import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Container>
          <main className='py-3'>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart/:id?' component={CartScreen} />
          </main>
        </Container>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
