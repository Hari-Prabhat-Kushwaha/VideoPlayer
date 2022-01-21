import React from 'react'

function Deshboard() {
    return (
        <>
            <div className="deshboard">
                {/* <h2 className="deshboard__heading def">Best Vedios on</h2> */}
                <div className="deshboard__items">
                    <div className="deshboard__item">
                        <h1>Thrill</h1>
                        <h3>Shorts</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>Drama</h1>
                        <h3>Shorts</h3>
                    </div>
                    <div className="deshboard__item mainItem">
                    <div className="header__logoImg">
                        <img className='cardImage' src="./logo.jpg" alt="Video Player" />
                        {/* <h1>BingePrime</h1> */}
                        </div>
                        <h3>Make your own Favourites Playlist</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>Romance</h1>
                        <h3>Shorts</h3>
                    </div>
                    <div className="deshboard__item">
                        <h1>Horror</h1>
                        <h3>Shorts</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Deshboard
