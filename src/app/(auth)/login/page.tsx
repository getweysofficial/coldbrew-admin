"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import FormInput from "@/app/component/AppInput/AppInput";
import AppButton from "@/app/component/AppButton/AppButton";

import logo from "../../../../public/images/coldbrew.png";
import Slider_1 from "../../../../public/images/slider_1.jpg";
import Slider_2 from "../../../../public/images/slider_2.jpg";
import Slider_3 from "../../../../public/images/slider_3.jpg";

const Login = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slider_1, Slider_2, Slider_3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      <div className="hidden md:block relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            width={1920}
            height={1080}
            alt={`Coffee Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            quality={100}
            priority={index === 0}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-[#BE5103]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-4 sm:p-6 md:p-12">
        <div className="w-full max-w-md p-6 sm:p-8">
          <Image
            src={logo}
            alt="Coffee Logo"
            width={128}
            height={40}
            className="mx-auto mb-4"
            quality={100}
            priority
          />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 font-hero">
            Welcome Back
          </h2>
          <div className="space-y-5">
            <FormInput
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
            <FormInput
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              showPasswordToggle
              required
              autoComplete="current-password"
            />
            <AppButton label="Sign In" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
