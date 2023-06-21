import './CheckoutPage.css';

function CheckoutPage(){

    return(
            <div className='cart-main-div'>
                <h1>Checkout</h1>
                <div className='ul'>
                    <ul className='cart-book-list'>
                        <li>
                            <div className='list-book'>
                                <img src="https://m.media-amazon.com/images/I/8150Xvi+XSL._AC_UF1000,1000_QL80_.jpg" alt="" />
                                <div>
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                            </div>

                            <div className='book-info-div'>
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

                                <button>Remove</button>
                            </div>

                        </li>

                        <li>
                            <div className='list-book'>
                                <img src="https://m.media-amazon.com/images/I/8150Xvi+XSL._AC_UF1000,1000_QL80_.jpg" alt="" />
                                <div>
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                            </div>

                            <div className='book-info-div'>
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

                                <button>Remove</button>
                            </div>

                        </li>
                    </ul>

                <div className='total'>
                    <h2>Total</h2>
                    <hr />
                    <p>MRP: 6000</p>
                    <p>Price: 5000</p>

                    <hr />

                    <p>Total: 4000</p>
                </div>
                </div>


        </div>
    )
}


export default CheckoutPage;