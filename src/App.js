import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import './App.css';

function App() {
  const initialConfig = {
    namespace: 'MyEditor',
    onError: (error) => console.error(error),
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lexical Editor</h1>
      </header>
      <main>
        <LexicalComposer initialConfig={initialConfig}>
          <div className="editor-container">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<div className="editor-placeholder">Enter some text...</div>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
          </div>
        </LexicalComposer>
      </main>
    </div>
  );
}

export default App;
