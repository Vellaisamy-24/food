import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoginContext } from './App';

const Order = () => {
  const { userName } = useContext(LoginContext);
  const { name, cost, quantity, totalprice } = useParams();
  const [formData, setFormData] = useState({ address: '', mobile: '' });
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.address && formData.mobile) {
      setTimeout(() => {
        setOrderPlaced(true);
      }, 500);
    } else {
      setError('Please provide your address and mobile number.');
    }
  };

  return (
    <div className='flex justify-center'>
    <div className="bg-backgroundColor  lg:w-[500px] p-[10px] md:p-[20px]  md:mt-[300px] border md:w-[300px]">
      <div className="font-bold md:text-[40px] m-[10px] md:p-[15px] text-orange-400 text-center"> Bill Details</div>
      {orderPlaced ? (
        <div className="text-center border shadow-2xl">
          <h2 className="text-green-600 text-2xl font-semibold">Order placed successfully!</h2>
          <p>Your order will be delivered soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="m-[10px]">
            <span className="font-bold font-montserrat md:text-[20px]">Food Name:</span>
            <span className="ml-[5px]">{name}</span>
          </div>
          <div className="m-[10px]">
            <span className="font-bold font-montserrat md:text-[20px]">Food Cost:</span>
            <span>{cost}</span>
          </div>
          <div className="m-[10px]"> <span className="font-bold font-montserrat md:text-[20px]">Quantity:</span>  <span>{quantity}</span>
          </div>
          <div className="m-[10px]"><span className="font-bold font-montserrat md:text-[20px]">User:</span>  <span>{userName}</span>
          
          </div>
          <div className="m-[10px]">
            <span className="font-bold font-montserrat md:text-[20px]">TotalPrice:</span>
            <span>{totalprice}</span>
          </div>
          <div className="m-[10px]">
            <span className="font-bold font-montserrat md:text-[20px]">Address</span>
            <span>
              <input
                type="text"  name="address" required
                placeholder="Enter the address to be delivered" onChange={handleChange}
              />
            </span>
          </div>
          <div className="m-[10px]">
            <span className="font-bold font-montserrat md:text-[20px]">Mobile.No</span>
            <span>
              <input type="number" name="mobile"  required placeholder="Enter your mobile number"  onChange={handleChange}   />
                
            </span>
          </div>
          <div className="text-center mt-[30px]">
            <button
              className="font-semibold p-[10px] text-[25px] shadow-lg rounded-[6px] hover:text-bold hover:text-orange-700 hover:bg-white font-ibm-plex-sans bg-violet-400 text-white"
              type="submit" > Confirm Order </button>
          </div>
          {error && <p className="text-red-600 mt-3">{error}</p>}
        </form>
      )}
    </div>
    </div>
  );
};

export default Order;
