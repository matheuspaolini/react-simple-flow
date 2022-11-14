import ReactDOM from 'react-dom';

import { isDOM } from 'utils/isDOM';

import { useGetDocumentBody } from 'hooks/useGetDocumentBody';

export function Portal({ ...props }) {
  const { children } = props;
  const documentBody = useGetDocumentBody();

  if (!isDOM() || !documentBody) return null;

  return ReactDOM.createPortal(children, documentBody);
}
