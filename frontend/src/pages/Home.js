import React, { useEffect, useState } from 'react';
import KhodamImage from '../img/Khodam.png';
import axios from 'axios'

const Home = () => {
  const [khodam, setKhodam] = useState('');
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(false);
  const [user, setUser] = useState('');

  const fetchKhodam = async () => {
    try{
      const response = await axios.get(`https://my-khodam-api.vercel.app/api/khodams/hash?name=${name}`)
      if(response.status === 200){
        setKhodam(response.data.name)
      }else{
        console.error('Error fetching Khodam:', response.data);
      }
    } catch (error) {
      console.error('Error fetching ', error);
    }
  }

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name) {
      await fetchKhodam();
      setFlag(true);
    }
  };

  const anotherName = (event) => {
    event.preventDefault();
    setName('');
    setKhodam('');
    setFlag(false);
    setUser('');
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('https://my-khodam-api.vercel.app/api/users/random')
        if(response.status === 200){
          setUser(response.data[0].user)
        }
      }catch(error){
        console.error('Error: ', error)
      }
    };

    fetchData();
  }, [flag]);

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${KhodamImage})`}}
      ></div>
      <div className="relative z-10 text-center border border-4 p-8 md:p-16 border-[#A2D2FF] bg-slate-700 bg-opacity-80 backdrop-blur-lg">
        <div className="mb-6 max-sm:text-center">
          <h1 className="font-bold text-center text-xl">
            <span className="text-4xl text-[#A2D2FF]">
              Cek <span className="text-[#FFAFCC]">Khodam</span>
            </span>
            <br />
            <span className="text-[#A2D2FF]">By </span>
            <span className="text-sm text-[#FFAFCC]">@MyKhodam</span>
          </h1>
        </div>

        {khodam && (
          <div>
            <p className="mb-1 text-[#BDE0FE]">Khodam {name} hari ini adalah...</p>
            <p className="my-3 mb-5 text-2xl md:text-3xl font-bold text-[#FFAFCC] animate-pulse">✨{khodam}✨</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          {flag ? (
            <button onClick={anotherName} className="bg-[#A2D2FF] text-black px-4 py-2 rounded">
              Coba Nama Lain
            </button>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-[#A2D2FF]">Masukkan Nama Kamu</p>
              <input
                type="text"
                placeholder={user}
                value={name}
                onChange={handleChange}
                required
                className="border border-2 border-[#FFAFCC] text-[#A2D2FF] bg-transparent px-4 py-2 rounded"
              />
              <button type="submit" className="bg-[#A2D2FF] text-black px-4 py-2 animate-bounce rounded">
                Check✨
              </button>
              <div className="flex">
                <a href="/idea" className="bg-[#FFAFCC] py-1 mx-1 px-3 rounded">
                  Add➕
                </a>
                <a href="/about" className="bg-[#FFAFCC] py-1 mx-1 px-3 rounded">
                  About❓
                </a>
                <a href="/review" className="bg-[#FFAFCC] py-1 mx-1 px-3 rounded">
                  Review🔎
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;
