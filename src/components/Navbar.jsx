import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">WatchList Logo</Link> 
                    </div>
                   <ul className="nav-links">
                        <li>
                            <Link to ="/watchlist"> Watchlist </Link>
                        </li>
        
                        <li>
                            <Link to ="/watched"> Watched </Link>
                        </li>

                        <li>
                            <Link to ="/add" className="btn btn-main"> + Add  </Link>
                        </li>

                    </ul>   
                </div>
            </div>
        </header>
            
    )
}
