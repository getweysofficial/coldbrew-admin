"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/coldbrew.png";

function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="size-36 animate-pulse">
        <Image
          src={logo}
          alt="Logo"
          width={1000}
          height={1000}
          className="object-contain transition-transform duration-1000 ease-in-out"
          priority
        />
      </div>
    </main>
  );
}

export default SplashScreen;
