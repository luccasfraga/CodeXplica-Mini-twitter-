import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import React from 'react';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';

const CodeEditor = ({ mode }) => (
  <AceEditor
    placeholder="Code aqui!"
    mode={mode}
    theme="tomorrow"
    fontSize={14}
    showPrintMargin
    showGutter
    highlightActiveLine
  />
);

CodeEditor.prototypes = {
  mode: PropTypes.string.isRequired,
};

export default CodeEditor;
