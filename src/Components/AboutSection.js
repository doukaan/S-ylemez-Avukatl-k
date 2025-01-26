import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-16 bg-[#212730]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-2">Hakkımızda</h2>
        <div className="w-64 h-1 bg-white mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="flex justify-center">
            <img
              src="/İmages/buro.jpg"
              alt="About Us"
              className="w-3/4 rounded-2xl mx-auto" // Resim boyutlarını esnek hale getirdim
            />
          </div>
          <div className="text-white text-sm md:text-base">
            <p className="mb-6">
            2024 yılında kurulan Söylemez Hukuk Bürosu, kurucusu Av. Mürsel Söylemez’in liderliğinde,
             müvekkillerine güvenilir ve sonuç odaklı hukuki çözümler sunmayı amaçlayan bir hukuk firmasıdır.
             Büromuz, adaletin temel değerlerine bağlı kalarak, 
             bireysel ve kurumsal müşterilerinin ihtiyaçlarına özel çözümler üretmektedir.            </p>
            <p className="mb-6">
            Hukukun çeşitli alanlarında uzmanlaşmış olan Söylemez Hukuk Bürosu, özellikle ticaret hukuku, aile hukuku, 
            iş hukuku, ceza hukuku ve gayrimenkul hukuku gibi konularda kapsamlı danışmanlık ve temsil hizmetleri sunmaktadır.
             Müvekkillerimizin haklarını en iyi şekilde savunmayı ve 
             onlara güvenilir bir yol gösterici olmayı ilke edinmiş bulunmaktayız.            </p>
           
            <p>
            Hukuki sorunlarınıza çözüm bulmak ve profesyonel destek almak için Söylemez Hukuk Bürosu olarak
             sizlere yardımcı olmaktan memnuniyet duyarız. Adalet ve güvenin adresi olarak yanınızdayız.       
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
