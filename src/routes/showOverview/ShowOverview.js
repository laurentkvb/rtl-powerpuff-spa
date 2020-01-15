import React from 'react';
import './showOverview.scss';
import { Item } from '../../components/item/Item';

export const ShowOverview = () => {
  const data = [
    {
      title: 'The girly girl',
      description: 'Lorem ipsum',
    },
    {
      title: 'The man',
      description: 'Lorem ipsum',
    },
  ];

  return (
    <div className="show-overview">
      <h1>Hello</h1>

      <div className="show-overview__box">

      {data.map((value, index) => (
        <Item item={value} key={index} />
      ))}

      </div>

    </div>
  );
};

export default ShowOverview;
