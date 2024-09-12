import React from 'react';
import tv from '../assets/tv.png'
import phone from '../assets/mobile-0819.jpg'
import device from '../assets/device-pile-vn.png'
import kids from '../assets/kids.png'

export const Details = () => {
  return (
    <>
      <div id='content__details'>
        <div className="content__text">
          <h1>Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="content__image">
          <img src={tv} className="imageDetail" alt='content 1' />
        </div>
      </div>
      <div id='content__details'>
        <div className="content__image">
          <img src={phone} className="imageDetail" alt='content 1' />
        </div>
        <div className="content__text">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
      <div id='content__details'>
        <div className="content__text">
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className="content__image">
          <img src={device} className="imageDetail" alt='content 1' />
        </div>
      </div>
      <div id='content__details'>
        <div className="content__image">
          <img src={kids} className="imageDetail" alt='content 1' />
        </div>
        <div className="content__text">
          <h1>Create profiles for kids</h1>
          <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
    </>
  )
}