import React from 'react';
import CertificateCard from '@/components/component/certificate';

const CertificatePage = () => {
  const certificateData = {
    name: "John Kyle Salaysay",
    description: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa suscipit explicabo omnis officiis asperiores. Fugit eligendi architecto ratione doloribus laboriosam libero optio tempore soluta, iste eos? Odit quis pariatur sed!",
    date: "August 26, 2024"
  };

  return (
    <div className="max-h-screen bg-gray-100 py-2 px-4 sm:px-6 lg:px-8">
      <CertificateCard
        name="John Kyle Salaysay"
        event="Solve Fest Visayas 2024"
        date="May 3 - 4, 2024"
        locations={[
          "Rose Memorial Auditorium, Central Philippine University, Iloilo City"
        ]}
      />
      {/* <div className="mt-8 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Certificate
        </button>
      </div> */}
    </div>
  );
};

export default CertificatePage;