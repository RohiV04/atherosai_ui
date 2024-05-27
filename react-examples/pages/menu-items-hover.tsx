import React from 'react';

const MenuItemsPage = () => {
    return <>
         <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>Scala</li>
        </ul>
        <style jsx>
                    {`
ul {
  background-color: #120C32;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 16px 32px;
  border-radius: 32px;
  gap: 16px;
  box-shadow: #FF995030 0px 4px 8px;
}      
                  
li {
display: inline-block;
position: relative;
color: white;
cursor: pointer;
}

li::after {
content: '';
position: absolute;
width: 100%;
transform: scaleX(0);
height: 2px;
bottom: -4px;
left: 0;
background-color: #FF9950;
transform-origin: bottom center;
transition: transform 0.25s ease-out;
}

li:hover::after {
transform: scaleX(1);
transform-origin: bottom center;
}`}
                </style>
    </>
}

export default MenuItemsPage;