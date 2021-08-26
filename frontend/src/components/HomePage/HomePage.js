import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/images/sport1.jpg',
    altText: 'Slide 1',
    caption: '',
    header: 'У нас вы сможете купить спортивное и функциональное питание',
    key: '1'
    
  },
  {
    src: '/images/Arni.png',
    altText: 'Slide 2',
    caption: '',
    header: 'Распродажа началась!',
    key: '2'
  },
  {
    src: '/images/sport2.jpg',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
];

const HomePage = () =>
  <div className="w-100 p-5">
    <UncontrolledCarousel items={items} />
  </div>
  ;

export default HomePage;
