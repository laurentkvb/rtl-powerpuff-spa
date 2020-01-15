import React from 'react';

import './richText.scss';

export const RichText = ({ text }) => (
  <div
    className="rich-text"
    dangerouslySetInnerHTML={{ __html: text }}
  />
);
