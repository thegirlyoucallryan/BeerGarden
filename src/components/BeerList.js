
import React from 'react';
import styles from './BeerList.module.css'


const BeerList = (props) => {
  
    return(
        <div>
            
            <ul className={styles.beerList}>
                {props.beers?.map((beers) => {
                    return <li key={beers.id}>
                        <div className={styles.liBox}>
                            <h1>{beers.name}</h1>
                    <p className={styles.descript}>{beers.description}</p>
                    </div>
                   
                    
                    <div className={styles.imgbox}>
                    <img src={beers.image} alt={beers.name}></img>
                    <p className={styles.alc}>Alcohol  {beers.alcohol}%</p>
                    <h3>Brewing Tips:  <br/>{beers.tips}</h3>
                    </div>
                   
                    </li>
                })
            }
            </ul>
        </div>
        
    )
  
};

export default BeerList;