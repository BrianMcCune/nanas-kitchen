import taco from '../images/taco.jpg';
import menudo from '../images/menudo.jpg';
import biscuit from '../images/biscuit.jpg';
import React from 'react';
import "../styles/menu.css";
import SEO from '../components/seo';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const Menu = () => {

    return ( 
        <div className="menu-background">
            <SEO
                title="Menu | Nana's Kitchen – Breakfast Tacos & More"
                description="Explore Nana's full menu of breakfast tacos, migas, and local favorites. Always made hot and fresh!"
                pathname="/menu"
                image="../images/nanas-icon.png"
            />
            <section className="menu">
                <div className="menu-header">
                    <span>
                        <h1 className='header-part-one'>Nana's Kitchen</h1> <div className='header-part-two'>Menu</div>
                    </span>
                    <p className='disclaimer'><em>Each item is freshly made to order — please allow extra time during busy hours. Menu may vary depending on inventory or special occasions.</em></p>
                </div>
                    
                <div>
                    <h2 className='menu-title'><span>Breakfast Tacos</span></h2>
                    <ul>
                        <li>Chorizo & Egg</li>
                        <li>Spam & Egg</li>
                        <li>Papas Rancheras</li>
                        <li>Chorizo & Bean</li>
                        <li>Migas</li>
                        <li>Spicy Migas</li>
                        <li>Sausage & Egg</li>
                        <li>Chicharron & Egg</li>
                        <li>Chicharron & Bean</li>
                        <li>Spicy Chicharron & Egg</li>
                    </ul>
                </div>

                <div>
                    <h2 className='menu-title'><span>Weekend Specials</span></h2>
                    <ul>
                        <li>Nana’s Taco (Bacon, Egg, Bean, Cheese)</li>
                        <li>Carne Guisada</li>
                        <li>Picadillo</li>
                        <li>Barbacoa</li>
                        <li>Brisket Ranchero</li>
                        <li>Bacon & Egg</li>
                        <li>Bean & Cheese</li>
                        <li>Potato & Egg</li>
                        <li>Pork Tamales (½ dozen or dozen)</li>
                    </ul> 
                </div>
                <div className='taco-image-container'>
                    <img src={taco} alt="barbacoa Tacos" className='taco-image' />
                </div>
                <div>
                    <h2 className='menu-title'><span>Menudo</span></h2>
                    <ul>
                        <li>Small (16 oz)</li>
                        <li>Large (32 oz)</li>
                    </ul>
                </div>

                <div>
                    <h2 className='menu-title'><span>Add-Ons</span></h2>
                    <ul>
                        <li>Cheese</li>
                        <li>Beans</li>
                        <li>Potato</li>
                        <li>Bacon (2 strips)</li>
                    </ul>
                </div>

                <div className='drinks'>
                    <h2 className='menu-title'><span>Drinks</span></h2>
                    <ul>
                        <li>Big Red</li>
                        <li>Dr. Pepper</li>
                        <li>Sprite</li>
                        <li>Coke</li>
                        <li>Water</li>
                        <li>Apple Juice</li>
                        <li>Orange Juice</li>
                        <li>Bottled Coke</li>
                    </ul>
                </div>

                <div className='menudo-image-container'>
                    <img src={menudo} alt="menudo" className='menudo-image' />
                </div>
                <div className='monthly-specials'>
                    <h2 className='menu-title'><span>Homemade Biscuits</span></h2>
                    <p className='biscuit-description'>Try our Biscuits and Gravy special on the first Friday of ever month</p>
                    <div className='biscuit-image-container'>
                        <img src={biscuit} alt="Biscuit" className='biscuit-image' />
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Menu;
