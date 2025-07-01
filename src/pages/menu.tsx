import React from 'react';
import "../styles/menu.css";

const Menu = () => {
    return ( 
        <>
            <section className="menu">
                <div className="menu-header">
                    <h1><span>Nana's Kitchen Menu</span></h1>
                    <p><em>Each item is freshly made to order — please allow extra time during busy hours. Menu may vary depending on inventory or special occasions.</em></p>
                </div>
                    
                <div>
                    <h2>Breakfast Tacos</h2>
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
                    <h2>Weekend Specials</h2>
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
                    <h2>Menudo</h2>
                    <ul>
                        <li>Small (16 oz)</li>
                        <li>Large (32 oz)</li>
                    </ul>
                </div>

                <div>
                    <h2>Add-Ons</h2>
                    <ul>
                        <li>Cheese</li>
                        <li>Beans</li>
                        <li>Potato</li>
                        <li>Bacon (2 strips)</li>
                    </ul>
                </div>

                <div className='drinks'>
                    <h2>Drinks</h2>
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
        </>
     );
}
 
export default Menu;