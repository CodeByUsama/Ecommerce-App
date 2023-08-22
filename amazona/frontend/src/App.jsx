import { BrowserRouter, Link, Route , Routes  } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen";
import Nav from './Screens/Nav';

function App () {
  return (
    <BrowserRouter>
    <div>
      <header>
      <Nav/>
      </header> 
      <main>
        <Routes>
        <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/"element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
