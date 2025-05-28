import React from "react";

interface Cities {
  [key: string]: string[];
}

const CitySections: React.FC = () => {
  const cities: Cities = {
    A: ["Atlanta", "Asheville", "Austin"],
    B: ["Barcelona", "Bali", "Buenos Aires", "Bali", "Buenos Aires"],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  };

  return (
    <div className="mt-6">
      {Object.keys(cities)
        .filter((letter) => cities[letter].length > 0)
        .map((letter) => (
          <div key={letter} className="mb-6">
            <h2 className="text-4xl font-semibold text-[#BE5103] mb-1">
              {letter}
            </h2>
            <hr className="border-t border-gray-700 mb-4" />
            <div className="flex gap-4 flex-wrap">
              {cities[letter].map((city, index) => (
                <button
                  key={index}
                  className="cursor-pointer px-6 py-2 border-2 border-[#BE5103] text-[#BE5103] rounded-full hover:bg-[#BE5103] hover:text-white transition"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CitySections;
