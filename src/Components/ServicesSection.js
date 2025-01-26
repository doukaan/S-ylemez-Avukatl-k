"use client";
import React from "react";

const LegalServicesOverview = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6 h-full hover:bg-[#212730] hover:text-white transition-colors duration-300">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Kat Mülkiyeti Hukuku",
      description:
        "Kat mülkiyetine ilişkin olarak, apartman ve site yönetimlerine Kat Mülkiyeti Kanunu kapsamında danışmanlık hizmeti sunmaktayız.",
    },
    {
      title: "İdare Ve Vergi Hukuku",
      description:
        "Vergi uyuşmazlıklarından doğan davalar, İptal Davaları, Tam Yargı Davaları.",
    },
    {
      title: "Anayasa Mahkemesi'ne Başvuru",
      description:
        "Herkes, Anayasada güvence altına alınmış temel hak ve özgürlüklerinden, Avrupa İnsan Hakları Sözleşmesi kapsamında Anayasa Mahkemesi'ne başvurabilir.",
    },
    {
      title: "Ceza Hukuku",
      description:
        "Ceza hukuku, temel hak ve özgürlüklerin sınırlandırılması ile korunmasını bünyesinde toplar.",
    },
    {
      title: "Vergi Hukuku",
      description: "Vergi hukukundan doğan davalar; Ödeme emrini iptal davaları.",
    },
    {
      title: "Miras Hukuku",
      description:
        "Miras, intikali ve içerdiği mal varlıklarından doğan davalar, veraset ilamının alınması.",
    },
    {
      title: "İcra İflas Hukuku",
      description:
        "İcra müdürlükleri nezdinde ilamlı veya ilamsız takip, senet ve çeklerin icraya konulması.",
    },
    {
      title: "Borçlar Hukuku",
      description:
        "Sözleşmelerden, haksız fiillerden veya sebepsiz zenginleşmeden doğan borçlar.",
    },
    {
      title: "Tüketici Hukuku",
      description:
        "Tüketicinin Korunması Hakkında Kanun kapsamında dava ve danışmanlık hizmetleri.",
    },
    {
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu iptal ve tescil davaları, şufa ve meni müdahale davaları.",
    },
    {
      title: "Şirketler Hukuku",
      description: "Şirket kurulumu, devir, birleşme ve tasfiye hizmetleri.",
    },
    {
      title: "Fikri Mülkiyet Hukuku",
      description:
        "Marka, patent, tasarım ve telif haklarının korunması ve takibi.",
    },
  ];

  return (
    <section className="px-8 py-12">
    
    <h2 className="text-3xl font-bold text-center text-[#212730] mb-8">
  Hizmetlerimiz
  <div className="h-1 w-64 bg-[#212730] mx-auto mt-2"></div>
</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index}>
            <LegalServicesOverview
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
