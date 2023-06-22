import './Book.css'

import { Link } from 'react-router-dom';


function Book(){

    return(
        <div className='book'>
            <Link to='/detail/2'>
                <img className='book-img' src="https://m.media-amazon.com/images/I/8150Xvi+XSL._AC_UF1000,1000_QL80_.jpg" alt="" />            
            </Link>

            <div>
                <div>
                    <span>MRP:</span>
                    <span className='mrp'> Rs 9999</span>
                </div>

                <div>
                    <span>Price:</span>
                    <span className='real-price'>Rs 2900</span>
                </div>

            </div>
        </div>
    )
}

export default Book;
