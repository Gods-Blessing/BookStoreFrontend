import './ShoppingCart.css'

import {Link} from 'react-router-dom'



function ShoppingCart(){

    return(
        <div className='main-cart-container'>
            <ul>
            <li>
                            <div className='list-book'>
                                <Link to='/detail/2'>
                                <img src="https://m.media-amazon.com/images/I/8150Xvi+XSL._AC_UF1000,1000_QL80_.jpg" alt="" />
                                
                                </Link>
                                
                            </div>

                            <div className='book-info-div cart-book'>
                                <p>
                                    <span>Name :</span>
                                    <span> Book Name</span>
                                </p>

                                <p>
                                    <span>Author :</span>
                                    <span> Author</span>
                                </p>

                                <p>
                                    MRP : 4000
                                </p>

                                <p>
                                 Price : 1000
                                </p>

                                <p>
                                 Qty : 1
                                </p>

                                <button className='remove-btn'>Remove</button>
                            </div>

                        </li>



                        


                        
            </ul>
        </div>
    )
}


export default ShoppingCart;