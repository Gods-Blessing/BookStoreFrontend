import { useState } from 'react';
import './Home.css'
import Book from './book/Book';

function Home(){
    const [text, setText] = useState('');



    return(
        <main className='home-main-container'>
            <div className="search-container">
                <input onChange={(e)=>setText(e.target.value)} type="text" />
                <button>Search</button>
            </div>

            <section className='listing-container'>
                <aside className='aside-container'>

                </aside>

                <div className='books-container'>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    

                </div>

            </section>
        </main>
    )
}



export default Home;