import './styles.css';
import ProductImg from 'assets/images/car-card-1.png';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

const ProductCard = () =>{

    return(
        <div className="base-card product-card">

            <div className="card-top-container">
                <img src={ProductImg} alt="Imagem do produto"/>
            </div>

            <div className="card-bottom-container">

                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>

                <div className="btn-button">
                <Link to="/products">
                <ButtonIcon />
                </Link>
                </div>
                
            </div>



        </div>
    );
}


export default ProductCard;