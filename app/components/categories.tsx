'use client'
import MenuIcon from "./menuIcon";
import { useTranslation } from "react-i18next";
import React from 'react';

type Category = {
    name: string;
    subcategories: string[];
};

const categories: Category[] = [
    { name: "Electronics", subcategories: [
        "Digital Cameras",
        "Camcorders",
        "Camera Drones",
        "Smart Watches",
        "Headphones",
        "MP3 Players",
        "Microphones",
        "Chargers",
        "Batteries",
        "Cables & Adapters"
    ]},
    { name: "Accessories", subcategories: [] },
    { name: "Televisions", subcategories: [] },
    { name: "Best Selling", subcategories: [] },
    { name: "Top 100 Offer", subcategories: [] },
    { name: "Sunglasses", subcategories: [] },
    { name: "Watches", subcategories: [] },
    { name: "Men’s Products", subcategories: [] },
    { name: "Home Audio & Theater", subcategories: [] },
    { name: "Computers & Tablets", subcategories: [] },
    { name: "Video Games", subcategories: [] },
    { name: "Home Appliances", subcategories: [] },
];

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => {
    return (
        <ul className="main-category">
            {categories.map((category, index) => (
                <li key={index} className={category.subcategories.length > 0 ? "arrow" : ""}>
                    <a href="#">{category.name}</a>
                    {category.subcategories.length > 0 && (
                        <ul className="subCategory">
                            {category.subcategories.map((subcategory, subIndex) => (
                                <li key={subIndex}>
                                    <a href="#">{subcategory}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};



export default function Categories() {
    const [t] = useTranslation();

    

    return(
        <div className='categories '>
            <div className="category-btn d-flex align-items-center">
                <MenuIcon />
                <div className="title ms-3">{t('All Categories')}</div>
            </div>
            <div className="list">
                <div className="box">
                    <CategoryList categories={categories} />
                </div>
            </div>
        </div>
    )
}