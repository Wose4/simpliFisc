"use client"; // Ensures the component is rendered on the client-side

import React, { useState } from "react";
import ThemedTitle from "@/components/ui/questionnaire-components/themedTitle";
import ThemedInput from "@/components/ui/questionnaire-components/themedInput";
import ThemedTimeline from "@/components/ui/questionnaire-components/themedTimeline";

const Questionnaire: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Questions array
  const questions = [
    { label: "What’s your first name?", value: answer, setValue: setAnswer, id: "first-name", placeholder: "Enter your first name" },
    { label: "What’s your last name?", value: answer, setValue: setAnswer, id: "last-name", placeholder: "Enter your last name" },
    { label: "Where do you live?", value: answer, setValue: setAnswer, id: "location", placeholder: "Enter your location" },
    // Add more questions as needed
  ];

  const timelineOptions = [
    { label: "Started Learning React", subCategories: [{ label: "Watched tutorials", href: "#" }, { label: "Built a basic app", href: "#" }] },
    { label: "Built My First App", subCategories: [{ label: "Setup project", href: "#" }, { label: "Added functionality", href: "#" }] },
    { label: "Joined a Development Team", subCategories: [{ label: "Collaborated on projects", href: "#" }, { label: "Learned version control", href: "#" }] },
    { label: "Launched My Portfolio", subCategories: [{ label: "Created portfolio site", href: "#" }, { label: "Deployed using Netlify", href: "#" }] },
    { label: "Started Freelancing", subCategories: [{ label: "Built websites for clients", href: "#" }, { label: "Developed apps", href: "#" }] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${answer}`);
  };

  // Move to the next question when "Enter" is pressed
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleSubmit(e); // Submit the form if it's the last question
      }
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 flex justify-center items-center">
        <ThemedTimeline title="Timeline" options={timelineOptions} />
      </div>
      <div className="w-3/4 flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg max-w-4xl w-full flex flex-col"
          onKeyDown={handleKeyPress} // Handle "Enter" key press
        >
          <ThemedTitle size="lg" className="pb-10">
            {questions[currentQuestion].label}
          </ThemedTitle>
          <div className="mb-11">
            <ThemedInput
              label={questions[currentQuestion].label}
              id={questions[currentQuestion].id}
              value={questions[currentQuestion].value}
              onChange={(e) => questions[currentQuestion].setValue(e.target.value)}
              placeholder={questions[currentQuestion].placeholder}
              required
              size="lg"
              color="gray"
            />
          </div>
          <div className="mt-auto flex justify-end w-full">
            <button
              type="submit"
              className="w-1/6 flex justify-center items-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              OK{" "}
              <span className="ml-2 text-sm text-gray-300">
                (press Enter ↵)
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
