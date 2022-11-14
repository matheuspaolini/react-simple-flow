import { useEffect, useState } from 'react';

export function useGetDocumentBody() {
  const [documentBody, setDocumentBody] = useState(null as HTMLElement | null);

  useEffect(() => {
    const bodyElement = document.body;
    setDocumentBody(bodyElement);
  }, []);

  return documentBody;
}
