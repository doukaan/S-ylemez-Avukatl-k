import React from "react";

function Footer() {
  return (
    <footer className="bg-[#212730] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sol Sütun */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Söylemez Avukatlık</h3>
          <p className="text-sm font-bold">AV.MÜRSEL SÖYLEMEZ</p>
          <p className="text-sm text-gray-300">
            <a href="#" className="hover:text-white">Yasal Uyarılar</a> | 
            <a href="#" className="hover:text-white ml-2">Veri Gizliliği</a> | 
            <a href="#" className="hover:text-white ml-2">Çerez Politikası</a>
          </p>
          <p className="text-sm text-gray-300">
           
            <a
              href="https://www.doukaan.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Design By DOĞU KAAN ILGAZ
            </a>
          </p>
        </div>

        {/* Sağ Sütun */}
        <div className="flex flex-col space-y-4 text-sm text-gray-300">
          <h1 className="text-white text-xl font-bold">Bilgilendirme</h1>
          <p className="w-[80%]">
          Web sitemizdeki bilgi ve açıklamalar yalnızca bilgilendirme amaçlı olup Türkiye Cumhuriyeti Barolar Birliği’nin ilgili mevzuatına uygun olarak hazırlanmıştır. 
          Sitemizdeki hukuki bilgiler reklam, teklif, hukuki öneri veya hukuki danışmanlık teşkil etmez. 
          Sitede yapılan bütün açıklamalar bilgilendirme amaçlıdır ve bu bilgiler iş geliştirmeye yönelik olarak kullanılamaz.
          </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
