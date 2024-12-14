"use client"; // Ensures the component is rendered on the client-side

import React, { useState } from "react";
import ThemedTitle from "@/components/ui/questionnaire-components/themedTitle";
import ThemedInput from "@/components/ui/questionnaire-components/themedInput";
import ThemedTimeline from "@/components/ui/questionnaire-components/themedTimeline";
import {
  timelineOptions,
  questions,
} from "@/components/ui/questionnaire-components/questionnaire-constants";

const Questionnaire: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  const handleChildData = (data: string[]) => {
    console.log(data);
    if (data.length === 1) {
      const index = questions.findIndex((question) => question.id === data[0]);
      console.log(index);
      setCurrentQuestion(index);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 flex justify-center items-center">
        <ThemedTimeline
          title="Timeline"
          options={timelineOptions}
          onSendData={handleChildData}
        />
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
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
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
