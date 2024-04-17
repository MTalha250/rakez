"use client";

import dynamic from "next/dynamic";
import React from "react";

import Banking from "@/assets/banking.jpg";
import { motion } from "framer-motion";
import Image from "next/image";


const AccountApplication = dynamic(() => import("@/components/banking/AccountApplication"));
const BankingDes = dynamic(() => import("@/components/banking/BankingDes"));
const BankingHero = dynamic(() => import("@/components/banking/BankingHero"));
const UpperNavbar = dynamic(() => import("@/components/common/UpperNavbar"));
const HomeUpperNavContent = dynamic(
  () => import("@/components/common/UpperNavbar/HomeUpperNavContent")
);



const page = () => {
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <BankingHero />

      <BankingDes />

      <AccountApplication />
      
    </>
  );
};

export default page;
