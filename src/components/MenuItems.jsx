import React from 'react'

const MenuItems = (props) => {
    return (
        <>
                              {
                        props.item.map((valu) => {
                            const {id,image,name,category,price,description} =valu;
                            return(
                                <div className="col-md-4" key={id}>
                                    <div className="Card">
                                        <div className="left-side">
                                        <img className="img-fluid" src={image} alt={name}/>
                                        </div>
                                        <div className="right-side">
                                        <h4 className="title">{category}</h4>
                                            <h3 className="heading">{name}</h3>
                                            <p className="disc">{description} </p>
                                            <div className="button_wrapper">
                                                <p className="price">Price:{price}</p>
                                                <a href="/">Order Now</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
        </>
    )
}

export default MenuItems;
