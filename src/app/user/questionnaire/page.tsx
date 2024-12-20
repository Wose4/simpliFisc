"use client"; // Ensures the component is rendered on the client-side

import { useState } from "react";
import ThemedTitle from "@/components/ui/themedTitle";
import ThemedInput from "@/features/questionnaire-components/themedInput";
import ThemedTimeline from "@/features/questionnaire-components/themedTimeline";
import {
  timelineOptions,
  questions,
} from "@/features/questionnaire-components/questionnaire-constants";

const Questionnaire: React.FC = () => {
  const [answer, setAnswer] = useState("");
  const [lastQuestion, setLastQuestion] = useState(false);
  const [answers, setAnswers] = useState<{ [id: string]: string }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    console.log(answers);
    if (currentQuestion < questions.length - 1) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestion].id]: answer, // Add or update the entry with key "newId"
      }));
      setAnswer("");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("last question");
      console.log(answers);
      setLastQuestion(true);
      submitData();
      // handleNextQuestion(e, isKeyPress); // Submit the form if it's the last question
    }
  };

  const handleSubmit = (e: React.FormEvent) => handleNextQuestion(e);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNextQuestion(e);
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

  const submitData = async () => {
    console.log("Submitting data...");

    const response = await fetch("/api/submitData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div className="flex">
      <div className="w-1/4 max-h-screen">
        <ThemedTimeline
          title="Timeline"
          options={timelineOptions}
          onSendData={handleChildData}
          answers={answers}
        />
      </div>
      <div className="w-3/4 flex justify-center items-center h-screen">
        {!lastQuestion ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg max-w-4xl w-full flex flex-col"
            onKeyDown={handleKeyPress} // Handle "Enter" key press
          >
            <ThemedTitle size="lg" className="pb-10 font-marianne font-bold">
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
        ) : (
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full flex flex-col">
            <ThemedTitle size="lg" className="pb-10">
              Thank you for your answers!
            </ThemedTitle>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
