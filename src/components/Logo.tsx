import React from 'react'
import './_logo.css';
import LogoIcon from '../assets/logo.svg';

const Logo = () => {
  return (
    <div className='logo-links-wrapper'>
        <div className="logo-description-wrapper">
            <div className='logo-wrapper'>
                <img src={LogoIcon} alt="logo" className='logo'/>
                <span>StyleNest</span>
            </div>
            <div className="description">
                Craft stunning style journeys that weave more joy into every thread.
            </div>
        </div>
        <div className='links-wrapper'>            
            <div className='links__column__title'>SHOP CATEGORIES</div>
            <ul className='links__list'>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Unisex</a>
                </li>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Women</a>
                </li>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Men</a>
                </li>
            </ul>        
        </div>
        <div className='links-wrapper'>
            <div className='links__column__title'>SHOP COLLECTIONS</div>
            <ul className='links__list'>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Latest arrivals</a>
                </li>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Urban Oasis</a>
                </li>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Cozy Comfort</a>
                </li>
                <li className='links__list__item'>
                    <a href="/" className='links__list__link'>Fresh Fusion</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Logo