import menuImage from '../images/menu-background.avif';
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
            <div className="menu-background-image">
                <img src={menuImage} alt="Nana's Kitchen Menu Background" />
            </div>
            <section className="menu">
                <div className="menu-header">
                    <h1><span>
                        <mark className='header-part-one'>Nana's Kitchen</mark> <div className='header-part-two'>Menu</div>
                    </span></h1>
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
                        <li>Glass Bottled Coke</li>
                    </ul>
                </div>

            </section>
        </div>
     );
}
 
export default Menu;
