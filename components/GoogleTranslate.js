// components/GoogleTranslate.js
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        // Load the Google Translate script dynamically
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script tag on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Function called by Google Translate Widget
    window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            { pageLanguage: 'en' }, // Replace 'en' with your website's default language
            'google_translate_element'
        );
    };

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
