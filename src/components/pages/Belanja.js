import React from 'react';
import '../../App.css';
import './Belanja.css';

function Belanja(){
  return(
    <>
    <br /> <br /> 
      <h1 className='judul'>
        D'DY Kurma Shop
      </h1> 
     <div className='row'>
        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/Kurma-Sukari.jfif' />
            <br />
            <h3>
            Kurma Sukari
            </h3> <br />
            <p className='price'>
              Rp.75.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>
        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/4.jpeg' />
            <br />
            <h3>
            Kurma Ajwa
            </h3> <br />
            <p className='price'>
              Rp.200.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>
        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/10.jpeg' />
            <br />
            <h3>
            Kurma Tunis
            </h3> <br />
            <p className='price'>
              Rp.100.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>

        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/6.jpeg' />
            <br />
            <h3>
            Kurma Medjol
            </h3> <br />
            <p className='price'>
              Rp.200.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>
        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/mud.jpg' />
            <br />
            <h3>
            Kurma Muda
            </h3> <br />
            <p className='price'>
              Rp.250.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>
        <div className='Belanja-section'>
          <div className='card'>
            <img className='gambar' src='images/7.jpeg' />
            <br />
            <h3>
            Kurma Safawi
            </h3> <br />
            <p className='price'>
              Rp.75.000/Kg
            </p>
            <p href=''><button>Add to Cart</button></p>
          </div>
        </div>
        <div className='Belanja-section'>
          <div className='card'>
            <br />
            <br />
          </div>
        </div>
      </div>
      <br /> <br />
    
    </>
  );
}
export default Belanja;