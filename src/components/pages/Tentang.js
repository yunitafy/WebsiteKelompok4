import React from 'react';
import './Tentang.css';

function Tentang(){
return(
  <div className='about-section'>
    <img className='gambar' src='images/kurma.jpg' />
    <div className='about-container'>
      <br />
        <h1>About Company</h1>
           <p>D`DY Kurma adalah nama penjualan yang merupakan singkatan 
            dari nama pendiri yaitu Dwi Diah dan Yunita. kami menyajikan 
            berbagai jenis kurma dengan kualitas terbaik, yang dapat di 
            sajikan kapan saja</p> <br /> <br />
    </div>
      <div className='cards'>
      <h1>OUR TEAM</h1>
        <div className='tentang__container'>
        <div className='cards__wrapper'>
            <div className='our-team'>
              <div className='pic'>
                <img src='images/citra.jpeg' alt='citra' />
              </div>
              <div className='team-content'>
                <h3 className='team-content'>
                  Diah Citraningrum
                </h3>
                <span className='post'>
                  Front End Class
                </span>
                <span className='post'>
                  Diahcitraningrum0206@gmail.com
                </span>
              </div>
              <ul className='social'>
              <li>
                  <a href='https://www.facebook.com' className='fab fa-facebook-f' />
                </li>
                <li>
                  <a href='https://www.instagram.com' className='fab fa-instagram' />
                </li>
                <li>
                  <a href='github.com/dwijkarimah' className='fab fa-github' />
                </li>
              </ul>
            </div>
          </div>

          <div className='cards__wrapper'>
            <div className='our-team'>
              <div className='pic'>
                <img src='images/2.jpeg' alt='dwi' />
              </div>
              <div className='team-content'>
                <h3 className='team-content'>
                  Dwi Jayanti
                </h3>
                <span className='post'>
                  Front End Class
                </span>
                <span className='post'>
                  Dwijayanti123456789@gmail.com
                </span>
              </div>
              <ul className='social'>
              <li>
                  <a href='https://www.facebook.com' className='fab fa-facebook-f' />
                </li>
                <li>
                  <a href='https://www.instagram.com' className='fab fa-instagram' />
                </li>
                <li>
                  <a href='github.com/dwijkarimah' className='fab fa-github' />
                </li>
              </ul>
            </div>
          </div>

          <div className='cards__wrapper'>
            <div className='our-team'>
              <div className='pic'>
                <img src='images/yuni.jpeg' alt='dwi' />
              </div>
              <div className='team-content'>
                <h3 className='team-content'>
                  Yunita Fatmayeta
                </h3>
                <span className='post'>
                  Front End Class
                </span>
                <span className='post'>
                yunitafy913454618@gmail.com
                </span>
              </div>
              <ul className='social'>
              <li>
                  <a href='https://www.facebook.com' className='fab fa-facebook-f' />
                </li>
                <li>
                  <a href='https://www.instagram.com' className='fab fa-instagram' />
                </li>
                <li>
                  <a href='github.com/dwijkarimah' className='fab fa-github' />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>  

  </div>
);
}
export default Tentang;