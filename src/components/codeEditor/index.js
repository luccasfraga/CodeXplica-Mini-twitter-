import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import React from 'react';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow';

const CodeEditor = ({ mode, readOnly, value }) => (
  <AceEditor
    placeholder={!readOnly ? 'Copie o codigo ao lado.' : false}
    mode={mode}
    theme="tomorrow"
    showPrintMargin
    showGutter
    highlightActiveLine
    readOnly={readOnly}
    value={value}
    fontSize={18}
    height="300px"
  />
);

CodeEditor.propTypes = {
  mode: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};

CodeEditor.defaultProps = {
  readOnly: false,
};

export default CodeEditor;
