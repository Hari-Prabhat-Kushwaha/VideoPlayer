import React from 'react'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <div className="header__logoImg">
                    <h1>Video Player</h1>
                    {/* <img src="./logo.png" alt="Video Player" /> */}
                </div>
                <div className="header__logoText">
                    <p><span className="left">Powered by</span><span className="right">BingePrime</span></p>
                </div>
            </div>
            <div className="header__options">
                <div className="header__option">
                    <select>
                        <option value="INR">THRILLER</option>
                    </select>
                </div>
                <div className="header__option">
                    <select>
                        <option value="INR">ABC</option>
                        <option value="INR">ABC</option>
                        <option value="INR">ABC</option>
                        <option value="INR">ABC</option>
                    </select>
                </div>
                <div className="header__option">
                    <p>DRAMA</p>
                </div>
            </div>
            <div className="header__connect">
               
                <div className="header__telegram">
                    <p>Register</p>
                </div>
                <div className="header__toggleSwitch">
                    <label className="switch">
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

        </div>
    );
}

export default Header
