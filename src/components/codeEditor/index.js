import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import React from 'react';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow';

const CodeEditor = ({
  mode,
  readOnly,
  value,
  compareValue,
  handleDisabled,
  handleEnabled,
  onChange,
}) => {
  function handleChange(newValue) {
    onChange(newValue);

    const valNew = newValue.replace(/\s/g, '');
    const valCompare = compareValue.replace(/\s/g, '');

    if (valNew === valCompare) {
      handleDisabled();
    } else {
      handleEnabled();
    }
  }

  return (
    <AceEditor
      placeholder={!readOnly ? 'Digite aqui.' : ''}
      mode={mode}
      theme={!readOnly ? 'tomorrow' : 'monokai'}
      showPrintMargin
      showGutter
      highlightActiveLine
      readOnly={readOnly}
      value={value}
      fontSize={18}
      height="300px"
      onChange={handleChange}
      tabSize={0}
    />
  );
};

CodeEditor.propTypes = {
  mode: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  compareValue: PropTypes.string,
  handleDisabled: PropTypes.func,
  handleEnabled: PropTypes.func,
};

CodeEditor.defaultProps = {
  readOnly: false,
  value: '',
  compareValue: '',
  onChange: () => {},
  handleDisabled: () => {},
  handleEnabled: () => {},
};

export default CodeEditor;
