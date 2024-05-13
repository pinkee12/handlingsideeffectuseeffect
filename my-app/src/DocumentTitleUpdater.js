

import React, { useEffect } from 'react';

const DocumentTitleUpdater = () => {
  useEffect(() => {
    document.title = 'Updated Title';

    return () => {
      document.title = 'React App';
    };
  }, []);

  return <div>Document Title Updater - Check document title</div>;
};

export default DocumentTitleUpdater;

