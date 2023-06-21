import './Home.css'
import Book from './book/Book';

function Home(){

    return(
        <main className='home-main-container'>
            <div className="search-container">
                <input type="text" />
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