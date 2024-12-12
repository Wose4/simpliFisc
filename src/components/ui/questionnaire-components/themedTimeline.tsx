import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'; // You can use any icon you prefer

interface ThemedTimelineProps {
  title: string;
  options: {
    label: string;
    href?: string;
    subCategories?: { label: string; href?: string }[]; // Added subCategories for tree structure
  }[];
}

const ThemedTimeline: React.FC<ThemedTimelineProps> = ({ title, options }) => {
  // State to manage visibility of subcategories (array of open indices)
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  // Toggle subcategory visibility for each timeline step
  const handleToggle = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i)  => i !== index)); // Close it if it's already open
    } else {
      setOpenIndices([...openIndices, index]); // Open it if it's closed
    }
  };

  return (
    <div className="themed-timeline max-w-4xl mx-auto px-4 py-8">
      <div className="text-2xl font-semibold mb-6">{title}</div>
      <div className="relative border-l-2 border-gray-300">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-start mb-6 relative"
          >
            {/* Timeline Dot */}
            <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white absolute -left-3.5 z-10"></div>

            {/* Content - Timeline Step */}
            <div className="ml-12 flex flex-col">
              <div className="flex items-center">
                {/* Toggle Button for Subcategories */}
                <button
                  className="flex items-center text-lg font-medium text-blue-600 hover:underline"
                  onClick={() => handleToggle(index)}
                >
                  {option.label}
                  {/* Arrow Icon */}
                  <FaAngleDown
                    className={`ml-2 transition-transform duration-300 ease-in-out transform ${
                      openIndices.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {/* Subcategories - Hidden/Visible based on toggle state */}
              <div
                className={`transition-all duration-300 ease-in-out ml-6 mt-2 overflow-hidden ${
                  openIndices.includes(index)
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {option.subCategories &&
                  option.subCategories.map((subCategory, subIndex) => (
                    <div key={subIndex} className="flex flex-col mb-2">
                      <a
                        href={subCategory.href || '#'}
                        className="text-sm text-gray-700 hover:underline"
                      >
                        {subCategory.label}
                      </a>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemedTimeline;
