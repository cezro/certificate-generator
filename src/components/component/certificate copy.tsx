"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface CertificateCardProps {
  name: string;
  course: string;
  date: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ name, course, date }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-cream-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-gold-500 w-full max-w-[30rem] aspect-[1.414/1] rounded-xl p-6 border-8 border-double">
        <CardItem
          translateZ="50"
          className="text-4xl font-serif text-gold-700 text-center mb-4 w-full"
        >
          Certificate of Completion
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-xl text-center mb-8 w-full"
        >
          This is to certify that
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-3xl font-bold text-navy-800 text-center mb-8 w-full"
        >
          {name}
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-xl text-center mb-8 w-full"
        >
          has successfully completed the course
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-2xl font-bold text-navy-800 text-center mb-8 w-full"
        >
          {course}
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-xl text-center mb-12 w-full"
        >
          on {date}
        </CardItem>
        <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ="20"
            className="w-1/3 border-t-2 border-gray-400"
          > </CardItem>
          <CardItem
            translateZ="30"
            className="text-lg font-serif"
          >
            Signature
          </CardItem>
          <CardItem
            translateZ="20"
            className="w-1/3 border-t-2 border-gray-400"
          > </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CertificateCard;
