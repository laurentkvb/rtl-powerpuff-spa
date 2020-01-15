import React from 'react';
import './item.scss';

export const Item = ({ item }) => (
  <div className="item">
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
  </div>
);
