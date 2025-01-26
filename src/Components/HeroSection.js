import React from 'react';

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("/İmages/giriş.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Hukuki Çözüm Ortağınız</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">Deneyimli kadromuzla hukuki sorunlarınıza çözüm sunuyoruz.</p>
        <button  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
         <a href="#Contact">Bize Ulaşın</a> 
        </button>
      </div>
    </section>
  );
}

export default HeroSection;