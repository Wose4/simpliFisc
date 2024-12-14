import "./questionnaire.css";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface ThemedTimelineProps {
  title: string;
  options: {
    label: string;
    href?: string;
    subCategories?: { label: string; ids: string[] }[];
  }[];
  onSendData: (arg0: string[]) => void;
}

const ThemedTimeline: React.FC<ThemedTimelineProps> = ({ title, options, onSendData }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index)); // Close it if it's already open
    } else {
      setOpenIndices([...openIndices, index]); // Open it if it's closed
    }
  };

  // Function to send data to parent, sending which questions we want to acces.
  const sendQuestionIdsToParent = (idList: string[]) => {
    onSendData(idList);
  };

  return (
    <div className="themed-timeline max-w-4xl mx-auto px-4 py-8 bg-blue-50 rounded-xl">
      {/* Title */}
      <div className="text-2xl font-semibold mb-6">{title}</div>

      {/* Timeline Steps */}
      <div className="relative max-h-[500px] overflow-y-auto themed-timeline-scrollbar">
        {options.map((option, index) => (
          <div key={index} className="flex flex-col mb-6 relative">
            {/* Content - Timeline Step */}
            <div className="flex flex-col">
              <button
                className="flex justify-between items-center w-full text-left p-2 rounded-lg hover:bg-blue-100"
                onClick={() => handleToggle(index)}
              >
                {/* Label on the left */}
                <span className="text-lg font-medium text-blue-600">
                  {option.label}
                </span>
                {/* Arrow on the right */}
                <FaAngleDown
                  className={`transition-transform duration-300 ease-in-out transform text-blue-600 ${
                    openIndices.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Subcategories - Hidden/Visible based on toggle state */}
              <div
                className={`themed-timeline-scrollbar-sub transition-all duration-300 ease-in-out ml-6 mt-2 overflow-hidden ${
                  openIndices.includes(index)
                    ? "max-h-[200px] opacity-100 overflow-y-auto" // Allow scroll if content exceeds max height
                    : "max-h-0 opacity-0"
                }`}
              >
                {option.subCategories &&
                  option.subCategories.map((subCategory, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <button
                        onClick={() => sendQuestionIdsToParent(subCategory.ids)}
                        className="text-left text-sm text-blue-500"
                      >
                        {subCategory.label}
                      </button>
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
