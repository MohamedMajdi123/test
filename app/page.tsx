'use client'

import Link from 'next/link';
import Slider from './components/slider';
import './lip/i18next';
import Products from './components/products';
import CallAction from './components/callAction';
import Banners from './components/banners';
import ShoppingInfo from './components/shoppingInfo';


function Home(){

  return (
    <main>
      <div className="content">
        <div className="hero-area">
          <div className="row">
            <div className="col-lg-8 col-12">
                <div className="overflow-hidden">
                  <Slider />
                </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                <div className="col-md-6 col-lg-12 col-12">
                  <div className="banner banner1">
                    <div className="box">
                      <h2>
                        <span>New line required</span>
                        iPhone 12 Pro Max
                      </h2>
                      <h3>$259.99</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12 col-12">
                  <div className="banner banner2">
                    <div className="box">
                      <h1>Weekly Sale!</h1>
                      <p>Saving up to 50% off all online store items this week.</p>
                      <button className='main-btn white'>
                        <Link href="#">Shop Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Products />
          <CallAction />
          <Banners />
          <ShoppingInfo />
    </main>
  );
}

export default Home;