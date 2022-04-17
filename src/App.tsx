import usePlaying from './contexts/usePlaying';

import { GamePlay, StartGameConfig } from './pages';

function App() {
  const { isPlaying } = usePlaying();

  let content = <StartGameConfig />;

  if (isPlaying) {
    content = <GamePlay />;
  }

  return content;
}

export default App;
