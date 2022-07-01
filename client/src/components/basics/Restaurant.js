import React, {useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import {MenuCard} from './MenuCard.js';
import Navbar from './Navbar.js';

//...is a spread operator

const uniqeList = [...new Set(Menu.map((curElem)=>{
	return curElem.category;})
),
"All",
]; 


export const Restaurant = () =>{
	const [menuData, setmenuData] = useState(Menu);
	const[menuList,setmenuList] = useState(uniqeList)

	const filterItem=(category)=>{
		if(category ==="All")
		{
			setmenuData(Menu);
			return;
		}
		const updatedList = Menu.filter((curElem)=>{
			return curElem.category === category;
		});

		setmenuData(updatedList);
	};

	return(
			<>
			<Navbar filterItem={filterItem} menuList={menuList}/>

			<MenuCard menuData={menuData}/>
			</>
		);
};
