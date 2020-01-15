import React from 'react';

import './richText.scss';

export const RichText = ({ text }) => (
  <div
    dangerouslySetInnerHTML={{ __html: text }}
  />
);
