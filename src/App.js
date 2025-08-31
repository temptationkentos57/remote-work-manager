import React from 'react';
import ProjectManager from './components/ProjectManager';
import ClientCommunication from './components/ClientCommunication';
import InvoiceGenerator from './components/InvoiceGenerator';
import Reports from './components/Reports';

const App = () => {
  return (
    <div>
      <h1>Remote Work Manager</h1>
      <ProjectManager />
      <ClientCommunication />
      <InvoiceGenerator />
      <Reports />
    </div>
  );
};

export default App;