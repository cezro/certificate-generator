"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface CertificateCardProps {
  name: string;
  event: string;
  date: string;
  locations: string[];
}

const CertificateCard: React.FC<CertificateCardProps> = ({ name, event, date, locations }) => {
  return (
    <CardContainer className="inter-var w-full lg:w-[840px] max-h-screen">
      <CardBody className="flex flex-col relative group/card p-8 py-14 sm:py-16 md:py-24 w-full max-h-screen aspect-[1.414/1] border-2">
        <Image
          src="/images/solve-cert-background.png"
          layout="fill"
          objectFit="cover"
          alt="Certificate background"

        />
        <div className="flex flex-col relative z-10 items-center">
          <CardItem
            translateZ="60"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 text-center mb-2 sm:mb-4 md:mb-6"
          >
            CERTIFICATE OF ACHIEVEMENT
          </CardItem>
          <CardItem
            translateZ="40"
            className="text-lg sm:text-xl md:text-2xl text-center mb-2 sm:mb-4 md:mb-6"
          >
            Is presented to
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 text-center mb-2 sm:mb-4 md:mb-6"
          >
            {name}
          </CardItem>
          <CardItem
            translateZ="40"
            className="text-[10px] sm:text-sm md:text-base text-center mb-4 sm:mb-6 md:smb-8"
          >
            for their outstanding achievement as CHAMPION of {event},
            held on {date}, at the {locations[0]}.
          </CardItem>
        </div>
        <div className="flex items-center mt-24 px-auto gap-2 sm:gap-4 md:gap">
          <CardItem translateZ="30" className="text-center ml-auto mr-4">

            <p className="text-[10px] sm:text-xs md:text-sm font-medium">MYKIELL DEOVENN PAGAYONAN</p>
            <p className="text-[8px] sm:text-[10px] md:text-xs">Lead, Google Developer Student Clubs</p>
            <p className="text-[8px] sm:text-[10px] md:text-xs">Central Philippine University</p>
          </CardItem>
          <CardItem translateZ="30" className="text-center mr-auto ml-4">

            <p className="text-[10px] sm:text-xs md:text-sm font-medium">CLARENCE EARL DIOKNO</p>
            <p className="text-[8px] sm:text-[10px] md:text-xs">Lead, Google Developer Student Clubs</p>
            <p className="text-[8px] sm:text-[10px] md:text-xs">University of San Agustin</p>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CertificateCard;