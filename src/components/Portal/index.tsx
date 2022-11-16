import ReactDOM from 'react-dom';

import { isDOM } from '../../utils/isDOM';

import { useEffect, useRef } from 'react';

export function Portal({ ...props }) {
  const documentBodyRef = useRef(null as null | HTMLElement);

  useEffect(() => {
    documentBodyRef.current = document.body;
  }, []);

  if (!isDOM() || !documentBodyRef.current) return null;

  return ReactDOM.createPortal(props.children, documentBodyRef.current);
}
