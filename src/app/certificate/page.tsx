"use client";

import React from 'react';
import CertificateCard from '@/components/component/certificate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificatePage = () => {
  const downloadCertificate = () => {
    const certificate = document.getElementById('certificate-card');
    if (certificate) {
      html2canvas(certificate).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('certificate.pdf');
      });
    }
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
      <div className="mt-8 text-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={downloadCertificate}
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;