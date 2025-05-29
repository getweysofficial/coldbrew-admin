import React, { useState } from "react";

interface Cities {
  [key: string]: string[];
}

interface CitySectionsProps {
  cities: Cities;
}

const CitySections: React.FC<CitySectionsProps> = ({ cities }) => {
  const [visibleCities, setVisibleCities] = useState<{ [key: string]: number }>(
    Object.fromEntries(Object.keys(cities).map((letter) => [letter, 15]))
  );

  const handleLoadMore = (letter: string) => {
    setVisibleCities((prev) => ({
      ...prev,
      [letter]: prev[letter] + 20,
    }));
  };

  return (
    <div className="mt-6">
      {Object.keys(cities)
        .filter((letter) => cities[letter].length > 0)
        .sort()
        .map((letter) => (
          <div key={letter} className="mb-6">
            <h2 className="text-5xl font-semibold text-[#BE5103] mb-1">
              {letter}
            </h2>
            <hr className="border-t-2 border-gray-700 mb-4" />
            <div className="flex gap-4 flex-wrap">
              {cities[letter]
                .slice(0, visibleCities[letter])
                .map((city, index) => (
                  <button
                    key={index}
                    className="cursor-pointer px-6 py-2 border-2 border-[#BE5103] text-[#BE5103] rounded-full hover:bg-[#BE5103] hover:text-white transition"
                  >
                    {city}
                  </button>
                ))}
            </div>
            {cities[letter].length > visibleCities[letter] && (
              <button
                onClick={() => handleLoadMore(letter)}
                className="mt-4 text-[#BE5103] underline hover:text-[#9b4202] transition cursor-pointer"
              >
                Load More
              </button>
            )}
          </div>
        ))}
      {Object.keys(cities).every((letter) => cities[letter].length === 0) && (
        <p className="text-gray-700">No cities found.</p>
      )}
    </div>
  );
};

export default CitySections;
