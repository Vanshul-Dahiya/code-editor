import React from "react";
import Editor from "./Editor";
function App() {
  return (
    <>
      <div className="pane top-pane"></div>
      <Editor />
      <Editor />
      <Editor />
      <div className="pane">
        {/* allow scripts  -> it help with security (so that it doesn't access document cookies & stuff) */}
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
