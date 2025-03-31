'use client'
import { useTranslation } from 'react-i18next';

export default function HotLine() {
    const [t] = useTranslation(); 
    return(
        <div className="hotline d-flex align-items-center">
            <i className="fa-solid fa-phone circle-icon"></i>
            <div className="text">
                <div className='title'>{t('Hotline')}</div>
                <div className='number'>(+100) 123 456 7890</div>
            </div>
        </div>
    )
}