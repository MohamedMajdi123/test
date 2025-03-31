'use client'

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

type SelectionProps = {
  options: string[];
  selectionType: string;
};

function Selection(props: SelectionProps) {
  const [, i18next] = useTranslation();
  const selectValue = useRef<HTMLSelectElement>(null);
  function changeValue() {
    if(selectValue.current) {
      const lang = selectValue.current.value;
      localStorage.setItem(props.selectionType, lang)
      if(props.selectionType === 'lang') {
        i18next.changeLanguage(lang)
      }
    }
  }

  return (
    <select className='selection' ref={selectValue}  onChange={changeValue}>
      {props.options.map((option) => (
        <option className='option' key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Selection;