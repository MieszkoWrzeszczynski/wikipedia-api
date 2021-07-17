import './Replace.scss';
import PropTypes from 'prop-types';
import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const Replace = ({
  setPhraseToReplace = () => { },
  onReplace = () => { },
  onReplaceAll = () => { },
  phraseToReplace = ''
}) => {
  return (
    <div className="replace__container">
      <Input
        label="Replace with"
        value={phraseToReplace}
        onChange={setPhraseToReplace}
      />
      <Button
        text="Replace"
        onClick={onReplace}
      />
      <Button
        text="Replace all"
        onClick={onReplaceAll}
      />
    </div>
  )
};

Replace.propTypes = {
  setPhraseToReplace: PropTypes.func.isRequired,
  onReplaceAll: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
  phraseToReplace: PropTypes.string.isRequired,
};

export default Replace;
