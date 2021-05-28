import React from 'react'
import '../Menu/menu.css'

const marketData=[
    {
        "market_change_24hr": "+7.49%"
    },
    {
        "market_change_24hr": "-3.49%"
    }
]

const marketStatusNumber = marketData[0].market_change_24hr
const marketStatus = marketStatusNumber.split('')[0] === '+'? 'up' : 'down'
const marketStatusColor = marketStatus === 'up'? 'green': 'red';

export const Menu = () => {
    return (
        <div className='main-menu'>
            <img className='logo-image-mobile' src="logo.png" alt="logo" />
            <div className="market-status-box">
               <div className="market-text">Market is {marketStatus}</div> 
                <div className={`arrowAndNumber ${marketStatusColor}`}>
                    <img src= {`${marketStatusColor}_arrow.png`} alt="status arrow" />
                    {marketStatusNumber}
                </div>
            </div>
        </div>
    )
}

export default Menu