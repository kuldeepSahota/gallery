import React from 'react'

const MenuTabs = ({findItem ,kuldeep}) => {
    return (
        <>
            <div className="menu_tabs">
                {kuldeep.map((value,i) => {
                    return(
                        <button key={i} onClick={() => findItem(value)}>{value}</button>
                    )
                })}   
            </div>
            
        </>
    )
}

export default MenuTabs;
