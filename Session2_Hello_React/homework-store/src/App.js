import PHONG from './assets/ProductContainer/PHONG.jpg'
import RIB from './assets/ProductContainer/RIB.jpg'
import UNISEX from './assets/ProductContainer/UNISEX.jpg'
import BTHG from './assets/ProductContainer/BTHG.jpg'
import './App.css';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <ProductContainer 
        image={RIB} 
        name="ÁO PHÔNG NỮ RIB CỔ TRÒN"
        price="199.000"
        discount="Giảm 60%"
        />
      <ProductContainer 
        image={PHONG} 
        name="ÁO PHÔNG NỮ CỔ TAY PHỒNG"
        price="299.000"
        discount=""
        />
      <ProductContainer 
        image={UNISEX} 
        name="ÁO PHÔNG NỮ UNISEX TRƠN"
        price="599.000"
        discount=""
        />
      <ProductContainer 
        image={BTHG} 
        name="ÁO PHÔNG NỮ"
        price="99.000"
        discount="Giảm 40%"
        />
    </div>
  );
}

export default App;
