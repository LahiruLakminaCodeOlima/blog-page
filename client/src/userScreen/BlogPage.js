import React from 'react'
import Navigation from './Navigation'

function BlogPage() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <div className='mx-5'>
            <h1 className="my-5 ">What are the most popular Italian Pizzas?</h1>
            <div className="image-box d-flex justify-content-center">
                
                <div className="image-gradient"></div>
                <img src="website_images/pizza-wallpaper.jpg" alt="" className="cover-image"/>
                <p className="image-top-text">Satisfy Your Craving <br/> With Our Pizza</p>
                <p className="position-absolute text-light image-text-bottom">Quattro Formaggi</p>
                <div className='image-item-boxers'>
                    <div className="image-item-box" style={{backgroundColor:"rgb(22, 79, 194)",}}>
                        <p style={{marginBottom:"0",textAlign:"center",}}><b style={{fontSize:"20px"}}>100%</b><br/>Natural</p>
                    </div>
                    <div className="image-item-box">
                        <p style={{marginBottom:"0",textAlign:"center",}}><b style={{fontSize:"20px"}}>100%</b><br/>Italian</p>
                    </div>
                </div>
                
            </div>
            
            <div className="m-5">
                <p className="my-5 text-adjustment">
                    Pizza is one of the most essential aspects of the Italian way of life. Every taste of authentic 
                    Italian pizza will pique your interest if you're a pizza fan. From Margherita pizza to fluffy, 
                    thick pizza dough, Italy has it all! Pizza is a major topic in Italy. The pizza you eat in Italy 
                    and the Italian pizza Naples served in America are very different. Making pizza is an art and a 
                    very intangible aspect of Italian culture.
                </p>
                <div className="my-5 d-flex align-items-center">
                    <img src="website_images/paragraph-image-pizza.jpg" alt="" style={{width:"500px",borderRadius:"10px",boxShadow:"8px 8px 20px rgba(0,0,0,0.5)"}}/>
                    <p className="mx-5 text-adjustment" style={{width:"600px",}}>
                        Pizza is consumed worldwide, but Italian pizza is particularly distinctive owing to its preparation 
                        and flavor. Pizza is a staple of Italian culture because of the care and passion that goes into creating 
                        each individual slice. So, what distinguishes Italian pizza? The sauce created from recently peeled 
                        tomatoes is the first guess. The San Marzano tomatoes, which are grown locally on fertile Italian soil, 
                        are yet another factor. Unlike the use of canned tomatoes or sauce from a shop, Italians use fresh ingredients 
                        in making their beloved pizzas.
                    </p>
                </div>
                
                <p className="my-5 text-adjustment">In this article, we hope to give you a list of the most popular Italian Pizza Naples. </p>
                <p className="my-5 text-adjustment">
                    Everyone may enjoy pizza, from Rome to Naples! Pizza that is truly Italian and wonderful may be found in Italy. 
                    The following is a list of some of the most well-liked and mouth-watering traditional Italian pizzas:
                </p>
                <div className="my-5 d-flex align-items-center justify-content-end">
                    <p className="mx-5 text-adjustment" style={{width:"600px",}}>
                        The definition of cheesy pizza is Quattro Formaggio. This pizza features a wonderful Italian sauce sandwiched between 
                        light, crispy dough. The four various types of cheese that are liberally smeared are what distinguish it as special. 
                        Traditionally, gorgonzola, mozzarella, fontina, and Parmigiano-Reggiano are the four types of cheese used. This pizza 
                        has a distinctive flavor because of the cheese blend. Any lover of cheese will be in heaven! You need to know how to 
                        prepare authentic Italian pizza dough in order to cook this pizza at home or you can get frozen pizza shipped. 
                    </p>
                    <img src="website_images/paragraph--quattro-formaggi-pizza.jpg" alt="" style={{width:"500px",borderRadius:"10px",boxShadow:"8px 8px 20px rgba(0,0,0,0.5)"}}/>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default BlogPage