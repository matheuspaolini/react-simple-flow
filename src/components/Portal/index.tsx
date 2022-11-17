import ReactDOM from 'react-dom';

import { isClient } from '../../utils/isClient';

import { useEffect, useRef } from 'react';

export function Portal({ ...props }) {
  const documentBodyRef = useRef(null as null | HTMLElement);

  useEffect(() => {
    documentBodyRef.current = document.body;
  }, []);

  if (!isClient() || !documentBodyRef.current) return null;

  return ReactDOM.createPortal(props.children, documentBodyRef.current);
}
