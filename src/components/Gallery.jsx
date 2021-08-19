import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './GalleryData';
import MenuItems from './MenuItems';
import MenuTabs from './MenuTabs';



const MenuBtn = [...new Set(Menu.map((value) => value.category)) ,'all'] 
console.log(MenuBtn);

const Gallery = () => {
    const [item, setItem] = useState(Menu)
    const [btnItem,setBtnItem] = useState(MenuBtn);

    const findItem = (newVal) => {

        if (newVal === "all"){
            setItem(Menu)
            return;
        }
        const updatedItem = Menu.filter((curvalu) => {
            return curvalu.category === newVal;
        })
        setItem(updatedItem);
    }

    return (
        <>
            <h1>chose your best dish 🥰 </h1>
            <div className="container">
                <MenuTabs findItem={findItem} kuldeep={btnItem}/>
                
                <div className="Card_wrapper row mt-5 mb-5 g-4">
                
                 <MenuItems item={item} />   
  
            </div>
            </div>
            
        </>
    )
}

export default Gallery
