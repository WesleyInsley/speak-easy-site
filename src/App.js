import React from 'react';
import './App.css';
// image imports
import logo from './assets/logo.png';
import logoGraphic from './assets/logo-graphic.png';
import heroBanner from './assets/hero-banner.jpg'
import comedyCellar from './assets/comedy-cellar-img.jpeg';


const App = () => {
  return (
    <div className="App">
        
        <header id="home">
              <div className="logo-container">
                <img id="logo-graphic" src={logoGraphic} />
                <img id="logo-text" src={logo}/>
                <p>"risus ac bibendum"</p>
              </div>
          
              <div className="menu">
                <ul className="menu-items">
                  <li><a href="#home">home</a></li>
                  <li><a href="#location">location</a></li>
                  <li><a href="#menu">menu</a></li>
                </ul>
              </div>
        </header>

        <section id="hero-banner-container">
          <img id="hero-banner" src={heroBanner} />
          <div id="hero-banner-text">
            <h1>To Laugh and To Drink</h1>
            <p>A secret hideaway sits beneath the world famous comedy club</p>
          </div>
        </section>

        <section id="location">
          <img src={comedyCellar} />
          <div className="location-info">
          <p>"The Cellar Under The Cellar" - Higs Hideaway is located beneath the world-famous comedy club, The Comedy Cellar. Our dress code is simple - Semi-Formal. No sneakers, t-shirts, or jeans.</p>
          <p>117 MacDougal St, New York, NY 10012</p>
          <p>To get in, tell the doorman "risus ac bibendum"</p>
          </div>
        </section>

        <hr id="menu"/>

        <section id="menu-items">

        <h2>snacks</h2>
          <div id="#menu-items-snacks">
              <h4>NIBBLE TRAY $20</h4>
                <p>$8 individual item</p>
                <p>$3 extra crackers</p>
                <p>$9 spiced nuts</p>
          </div>

          <h2>bar food</h2>
          <div id="menu-items-barfood">
           
            <div className="menu-items-container">
              <h4>LOADED FRIES $14</h4>
              <p>Hand-Cut shoestring french fries covered with aged cheddar, applewood smoked bacon, and chives. Served with a side of truffle garlic aoili.</p>
            </div>

            <div className="menu-items-container">
              <h4>TINY TACO PLATE $12</h4>
              <p>Four tiny tacos filled with ground beef, shredded cheddar, lettuce, tomato, onion, sour gtream, and guacamole. (V) & (G) Options Available</p>
            </div>

            <div className="menu-items-container">
              <h4>Bourbon BBQ Wings $19</h4>
              <p>Six bone-in chicken wings coated in delicious house-made bourbon barbeque sauce.(V) & (G) Options Available</p>
            </div>

            <div className="menu-items-container">
              <h4>Cheese Sliders $22</h4>
              <p>Four bite-sized cheeseburger sliders. Brioche buns wrap up a freshly made hamburger covered in aged cheddar. (V) & (G) Options Available</p>
            </div>
            
          </div>

          <h2>drinks</h2>
          <div id="menu-items-drinks">
    
            <div className="menu-items-container">
              <h4>AMBER OLD FASHIONED $19</h4>
              <p>bourbon, aged rum, dash of sugar, peach & angostura bitters. stirred and served on a rock.</p>
            </div>

            <div className="menu-items-container">
              <h4>41 KARAT $19</h4>
              <p>rhum agricole, botanical liqueur, mezcal, dash of banana. stirred and served on a rock.</p>
            </div>
          
            <div className="menu-items-container">
              <h4>BASE CAMP $19</h4>
              <p>bourbon, islay scotch, dash of cacao & allspice, orange bitters. stirred and served on a rock.</p>
            </div>
          
            <div className="menu-items-container">
              <h4>BAD BLOOD $19</h4>
              <p>blended scotch, sweet vermouth, creole shrubb, dash of cherry heering, angostura bitters. stirred and served up</p>
            </div>
          
            <div className="menu-items-container">
              <h4>PORNSTAR MARTINI $19</h4>
              <p>vodka, passionfruit, lime, dash of cinnamon, sparkling wine. shaken and served up.</p>
            </div>
          
            <div className="menu-items-container">
              <h4>ROLLS ROYCE $19</h4>
              <p>gin, sweet vermouth, dry vermouth, benedictine. stirred and served up.</p>
            </div>
          
          </div>

        </section>

        <footer>
          <div id="social-icon-container">
            <a alt="facebook-link" href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
            <a alt="instagram-link" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a alt="email-link" href=""><i class="fa-solid fa-envelope fa-2xl"></i></a>
          </div>
          <p>117 MacDougal St, New York, NY 10012</p>
          <img src={logoGraphic} />
          <p><a href="#home">(back to top)</a></p>
          <p>© Copywrite 2022</p>
          <br />
          <p><a href="https://wesleyinsley.com/">Back To Main Site</a> | <a href="">GitHub</a></p>
        </footer>
    </div>
  );
}

export default App;
