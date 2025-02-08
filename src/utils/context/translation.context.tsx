import React, {useState} from 'react';
import {LanguageType} from '../translation/i18n';

export interface TranslationContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

export interface TranslationContextProviderProps {
  children?: any;
}

export const TranslationContext = React.createContext<TranslationContextType>({
  language: 'en-us',
  setLanguage: () => {},
});

export const TranslationContextProvider = (
  props: TranslationContextProviderProps,
) => {
  const [language, setLanguage] = useState<LanguageType>('en-us');

  // useEffect(() => {
  //   RNLocalize.addEventListener('change', updateLanguage);

  //   return () => RNLocalize.removeEventListener('change', updateLanguage);
  // }, []);

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage,
      }}>
      {props.children}
    </TranslationContext.Provider>
  );
};
