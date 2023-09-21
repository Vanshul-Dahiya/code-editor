import React, { useState, useEffect } from "react";
import Editor from "./Editor";
function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `  <html>
           <body>${html} </body>
           <style>${css}</style>
           <script>${js}</script>
           </html>`
      )
    }, 300);

    // don't queue => if user changes html,css,js during 250 sec of timeout
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor language="xml" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="xml" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        {/* allow scripts  -> it help with security (so that it doesn't access document cookies & stuff) */}
        <iframe
          srcDoc={srcDoc}
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
