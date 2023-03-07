import React, { useState } from 'react';
import { useCallback, useEffect } from 'react';
import './App.css'
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_URL,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <div className='app-main'>
      <h1>Geneareta an Image using Open AI API</h1>
        <input type="text" className="app-input" placeholder='Type something to generate an Image' onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={generateImage}>Generate an Image</button>
        {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
    </div>
  )
}

export default App