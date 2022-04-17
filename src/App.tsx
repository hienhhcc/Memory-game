import { useState } from 'react';

import { StartGameConfig } from './pages';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  let content = <StartGameConfig />;

  if (isPlaying) {
    content = <h1>Hello</h1>;
  }

  return content;
}

export default App;
