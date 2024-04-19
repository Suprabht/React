import { useTranslation } from 'react-i18next';

export const Header = () =>{
    const { t, i18n } = useTranslation();

    return(
        <>
            <h1>{t('this_is_header')}</h1>
            
        </>
        
    );
};