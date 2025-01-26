import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Map from './Map';
const ContactSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">İletişim</h2>
        <div className="w-48 h-1 bg-[#212730] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className='border-2 border-[#212730] p-4 rounded-lg bg-[#212730] '>
            <h3 className="text-2xl font-bold mb-6 text-white">Bize Ulaşın</h3>
            
            <div className="space-y-4 ">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-white mr-4" />
                <a className="w-1/2 text-white">
                Eski Cami Mahallesi, 23. Sokak, No: 2, Daire: 105,
                Ardys İş Merkezi, Salihli / Manisa 
                </a>
              
              </div>
              
              <div className="flex items-center">
 
                      <a
                        href="tel:+905525416681"
                        className="flex items-center text-white transition-colors"
                      >
                        <Phone className="w-6 h-6 text-white mr-4" />
                        <p>+90 (552) 541 6681</p>
                      </a>
                    </div>

                    <div className="flex items-center">
                    
                      <a
                        href="mailto:avmurselsoylemez@gmail.com"
                        className="flex items-center text-white transition-colors"
                      >
                        <Mail className="w-6 h-6 text-white mr-4" />
                        <p>avmurselsoylemez@gmail.com</p>
                      </a>
                    </div>

            </div>

            
          </div>

          <div className='border-2 border-[#212730] bg-[#212730] p-4 rounded-lg' >
            <h3 className="text-2xl font-bold mb-6 text-white">Konum</h3>
            <div className="w-full h-64 bg-gray-200 rounded-lg">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5933.34853468755!2d28.139776573165523!3d38.48825363371245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b85b86f9dd3db5%3A0x4ef25346ab30cefd!2sS%C3%B6ylemez%20Hukuk%20B%C3%BCrosu!5e0!3m2!1str!2str!4v1733505315504!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              className="w-full h-full"
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
