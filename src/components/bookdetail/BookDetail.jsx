import './BookDetail.css';


function BookDetail(){

    return(
        <section className="book-detail-container">
            <h2>Detail</h2>
            
            <div className="book-detail-container2">
                <img  src="https://m.media-amazon.com/images/I/8150Xvi+XSL._AC_UF1000,1000_QL80_.jpg" alt="" />

                <div className='info-div'>
                    <table>
                        <tr>
                            <th>Name :</th>
                            <td>Poirot Sul Nilo</td>
                        </tr>

                        <tr>
                            <th>Author :</th>
                            <td>Agatha Christie</td>
                        </tr>

                        <tr>
                            <th>Rating :</th>
                            <td>4.2/5</td>
                        </tr>

                    </table>
                    
                    <div className='review'>
                        <p><b>Review :</b></p>
                        <div >
                        Agatha Christies most daring crime mystery - an early and particularly brilliant outing of Hercule Poirot, The Murder of Roger Ackroyd, with its legendary twist, changed the detective fiction genre for ever.Roger Ackroyd knew too much. He knew that the woman he loved had poisoned her brutal first husband. He suspected also that someone had been blackmailing her. Now, tragically, came the news that she had taken her own life with a drug overdose.But the evening post brought Roger one last fatal scrap of information. Unfortunately, before he could finish the letter, he was stabbed to death.
                        </div>
                    </div>

                    <div className='price-div'>
                        <p>
                            <span> <b>MRP :</b></span>
                            <span className='overline-price'> Rs 1000</span>
                        </p>

                        <p>
                            <span><b>Price :</b></span>
                            <span> Rs 900</span>
                        </p>
                    </div>

                    <button className='addtocart'>Add to Cart</button>
                </div>

            </div>


        </section>
    )
}

export default BookDetail;