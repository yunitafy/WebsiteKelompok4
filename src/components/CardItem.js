import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__judul'>
            <h2 className='cards__item__loker'>{props.loker}</h2>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item--bold'>{props.bold}</p>
          </div>
          <div className='cards__item__tanggal'>
            <p className='cards__item__hari'>{props.tanggal}</p>
          </div>
          </Link>
      </li>
    </>
  );
}

export default CardItem;