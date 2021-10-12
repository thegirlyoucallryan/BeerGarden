import React from 'react';
import styles from '../components/Search.module.css'
import { useState } from 'react';
import BeerList from './BeerList';
import { Fragment } from 'react';
import Footer from './Footer'



const Search = () => {

    const [search, setSearch] = useState();
    const [beerList, setBeerList] = useState([]);
   

    const url = `https://api.punkapi.com/v2/beers?beer_name=${search}`

  async function fetchDrinkHandler() {

    if(search < 1) {
        return;
    }


      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      const beers = data.map(beer => ({

            id: beer.id,
            name: beer.name,
            description: beer.description,
            image: beer.image_url,
            alcohol: beer.abv,
            tips: beer.brewers_tips
            

        })
    );
    setBeerList(beers);
    console.log(beers)
   
    
     
     }

    function getSearchQuery(event) {
        setSearch(event.target.value);
        
    }

 

    const submitHandler = (e) => {
        e.preventDefault();
        if(e.target.value < 1){
            return;
        }
        fetchDrinkHandler();
        setSearch(' ');

    }
    

    return(
        <div className={styles.formBox}>
            <form className={styles.form} onSubmit={submitHandler}>
               
                <div className={styles.search}>
                <input placeholder="Search" id='searchbar' type='text' value={search}  onChange={getSearchQuery}></input>
               
                    </div>

                    <button type='submit'>Search</button>
            </form>
            <Fragment>
                {!beerList && <h1>No Results, Search for something else </h1>}
               {beerList && <BeerList beers={beerList}/>}
               <Footer/>
            </Fragment>
            
        </div>
    )
};

export default Search;