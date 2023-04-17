// src/App.js

import React, { useState } from 'react';
// import './App.css';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import TokenCountDisplay from './components/TokenCountDisplay';

function App() {
  const [response, setResponse] = useState('');
  const [tokenCount, setTokenCount] = useState(0);
  const [modelName, setModelName] = useState('dunno'); 
  const [fullResponse, setFullResponse] = useState({});

  return (
    <div className="App bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto md:px-8-auto max-w-screen-2xl px-4 md:px-8">
      <h1 className='font-bold text-center py-5'>Mr. STELTHē</h1>
				
      <InputForm
        setResponse={setResponse}
        setTokenCount={setTokenCount}
        updateModelName={setModelName} 
        setFullResponse={setFullResponse}
				/>
      <ResponseDisplay response={response} />
      <TokenCountDisplay
        tokenCount={tokenCount}
        modelName={modelName}
        fullResponse={fullResponse}
				/>
				</div>
    </div>
  );
}

export default App;
