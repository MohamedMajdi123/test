'use client'
import Selection from './selection';
import { useTranslation } from 'react-i18next';

const searchOptions = [
    'Phone',
    'Watche',
    'Camera',
    'Speaker'
]

export default function Search() {
    const [t] = useTranslation(); 
    return(
        <div className="search d-flex">
            <Selection selectionType='search' options={searchOptions}/>
            <input type="search" placeholder={t('Search')}/>
            <button className="main-btn">
                <i className="fa-solid fa-search"></i>
            </button>
        </div>
    )
}