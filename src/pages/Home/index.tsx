import './styles.css';
import {ReactComponent as MainImage} from 'assets/images/main-image.svg';
import ButtonCat from 'components/ButtonCat';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    
     <>
     <div className="home-container">
         <div className="base-card home-card">
             <div className="home-content-container">
                 <div>
                 <h1>O carro perfeito para você</h1>
                 <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                 </div>
             </div>
             <div className="home-image-container">
                 <MainImage/>
             </div>
         </div>
     </div>

     <div className="home-containe">
         <div className="base-car home-car">
             <div className="home-content-containe">
                 <div>
                 <Link to="/products">
                 <ButtonCat/>
                 </Link>
                 </div>
             </div>
             <div className="home-image-containe">
             <p>Comece agora a navegar</p>
             </div>
         </div>
     </div>



   </>
     
      
  );
}

export default Home;
