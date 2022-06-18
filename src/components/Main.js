import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img 
                        className='selectedPunk' 
                        src={'https://opensea.mypinata.cloud/ipfs/Qmf4vXStjXWL25H1LTEQ2XTqCZ6jTVbWTwggT6ESh8YusM/0.jpeg'} 
                    />
                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>Chapri Punk</div>
                <span className='itemNumber'>🍁#3</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={'https://opensea.mypinata.cloud/ipfs/Qmf4vXStjXWL25H1LTEQ2XTqCZ6jTVbWTwggT6ESh8YusM/0.jpeg'} alt="" />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x9e267749E478eD528b4A1F40bD600dA5510258Dc</div>
                        <div className='ownerHandle'>@0x_yasshhh_</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main