import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
const CodeEditor = ({mode}) => (
  <AceEditor
    placeholder="Code aqui!"
    mode={mode}
    theme="tomorrow"
    fontSize={14}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
  />
 );

CodeEditor.prototypes = {
  mode: PropTypes.string.isRequired
};

export default CodeEditor;
