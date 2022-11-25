import React, { useEffect } from "react";
import AceEditor from "../src/ace";
import { render } from "react-dom";

const App = () => {
  const [highlight, setHighlight] = React.useState("");
  const [found, setFound] = React.useState(false);
  useEffect(() => {
    console.log("found", found);
  }, [found]);
  return (
    <>
      <input
        placeholder="Input here"
        onChange={e => setHighlight(e.target.value)}
      />
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="blah2"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`function onLoad(editor) {
    console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 4
        }}
        highlight={highlight}
        setFoundHighlight={setFound}
      />
    </>
  );
};

render(<App />, document.getElementById("example"));
