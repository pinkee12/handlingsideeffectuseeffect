import React from 'react';
import DataFetcher from './DataFetcher';
import MouseTracker from './MouseTracker';
import DocumentTitleUpdater from './DocumentTitleUpdater';

const App = () => {
  return (
    <div>
      <DataFetcher />
      <MouseTracker />
      <DocumentTitleUpdater />
    </div>
  );
};

export default App;