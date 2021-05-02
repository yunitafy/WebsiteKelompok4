import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';

function Lowongan(){
    return(
        <div className='cards'>
          <img className='gambar' src='images/loker.jpeg' /> <br /> <br />
      <h1>Lowongan pekerjaan D'DY Kurma</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/marketing.jpeg'
              loker='Digital Marketing'
              text='DKI Jakarta'
              bold='Gaji Rp.3.500.000 - 4.200.000'
              label='DDY Kurma Jakarta'
              tanggal='1 Hari yang lalu'
              path='/SignUp'
            />
            <CardItem
              src='images/adm.jpg'
              loker='Admin Online'
              text='Bekasi, Jawa Barat'
              bold='Gaji Rp.3.500.000 - 4.500.000'
              label='DDY Kurma Bekasi'
              tanggal='2 Hari yang lalu'
              path='/SignUp'
            />
            <CardItem
              src='images/kasir.jpg'
              loker='Kasir'
              text='Bekasi, Jawa Barat'
              bold='Gaji Rp.2.500.000 - 3.200.000'
              label='DDY Kurma Bekasi'
              tanggal='5 Hari yang lalu'
              path='/SignUp'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/kasir.jpg'
              loker='Kasir'
              text='DKI Jakarta'
              bold='Gaji Rp.3.500.000 - 4.200.000'
              label='DDY Kurma Jakarta'
              tanggal='5 Hari yang lalu'
              path='/SignUp'
            />
            <CardItem
              src='images/pramu.jpeg'
              loker='Pramuniaga'
              text='DKI Jakarta'
              bold='Gaji Rp.2.000.000 - 3.500.000'
              label='DDY Kurma Jakarta'
              tanggal='6 Hari yang lalu'
              path='/SignUp'
            />
            <CardItem
              src='images/marketing.jpeg'
              loker='Digital Marketing'
              text='Depok, Jawa Barat'
              bold='Gaji Rp.3.000.000 - 3.200.000'
              label='DDY Kurma Depok'
              tanggal='1 Minggu yang lalu'
              path='/SignUp'
            />
            
          </ul>
        </div>
      </div>
    </div>
    );
}

export default Lowongan;