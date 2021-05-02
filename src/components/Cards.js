import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Menikmati Manisnya kurma di saat Buka Puasa</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/Kurma-Ajwa.jfif'
              text='Disebut Kurma Nabi,Kurma yang berbentuk kecil dan warna nya hitam gelap dengan tekstur lembut,Rasa yang tidak terlalu manis dan menyerupai kismis. '
              label='Kurma Ajwa'
              path='/sign-up'
            />
            <CardItem 
              src='images/Kurma-Sukari.jfif'
              text='Kurma Sukari salah satu Buah khas Timur Tengah yang banyak digemari,Buah yang punya Rasa manis dan Tekstur Legit ini sering di jadikan kudapan saat berbuka puasa'
              label='Kurma Sukari'
              path='/Belanja'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Kurma-Saidi.jfif'
              text='kurma sukari saidi adalah kurma yang berasal dari libya . dengan rasa kurma yang manis dan daging kurma yang tebal, tekstur kurma yang tidak terlalu basah.'
              label='Kurma Saidi'
              path='/Tentang'
            />
            <CardItem
              src='images/kurma-muda.jpg'
              text='Kurma Muda atau Kurma setengah matang,Rasanya tidak terlalu Manis  dan memiliki tekstur yang agak lunak. Kurma muda mengandung lebih sedikit kalori dan gula. Dan berguna untuk pengantin baru mendapatkan momongan.'
              label='Kurma Muda'
              path='/Galleri'
            />
            <CardItem
              src='images/Kurma-Mesir.jfif'
              text='Kurma yang berasal dari Tunisia,dangan cita rasa khas yang kenyal dagingnya yang manis dan gurih. dan kualitas kurma ini adalah Premium.  '
              label='Kurma Tangkai Deglet'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
