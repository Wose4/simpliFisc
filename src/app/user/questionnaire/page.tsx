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
  const [answers, setAnswers] = useState<{ [id: string]: string }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState("");
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  const handleNextQuestion = async (
    e: React.FormEvent | React.KeyboardEvent
  ) => {
    e.preventDefault();

    const storedAnswer = answers[questions[currentQuestion].id];
    const currentAnswer = answer?.trim() || storedAnswer?.trim();
    if (!currentAnswer) {
      setError("This field cannot be empty.");
      return;
    }
    setError("");
    const updatedAnswers = {
      ...answers,
      [questions[currentQuestion].id]: currentAnswer,
    };
    setAnswers(updatedAnswers);
    if (Object.keys(answers).length === questions.length) {
      setAllQuestionsAnswered(true);
    }
    if (currentQuestion < questions.length - 1) {
      setAnswer("");
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!allQuestionsAnswered) {
        handleNextQuestion(e);
      }
    }
  };

  const handleChildData = (data: string[]) => {
    if (data.length > 0) {
      const index = questions.findIndex((question) => question.id === data[0]);
      setCurrentQuestion(index);
      setError("");
      setAnswer("");
    }
  };

  const seeData = async () => {
    console.log("Submitting data...");
    setDataSent(true);
    try {
      const response = await fetch("/api/submitData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: answers }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit data");
      }

      const result = await response.json();
      console.log("Submission result:", result);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllQuestionsAnswered(false);
    const updatedValue = e.target.value;
    const currentId = questions[currentQuestion].id;
    // Update the individual answer in `answers`
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentId]: updatedValue, // Update the current question's answer
    }));
    // Optionally update the `answer` state if needed for some local behavior
    setAnswer(updatedValue);
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
      {/* container question */}
      <div className="w-3/4 flex justify-center items-center h-screen">
        {!dataSent ? (
          <form
            action={seeData}
            className="bg-white p-6 rounded-lg max-w-4xl w-full flex flex-col"
            onKeyDown={handleKeyPress} // Handle "Enter" key press
          >
            {/* counter */}
            <span className={"text-gray-400"}>
              {" "}
              {currentQuestion + 1} / {questions.length}
            </span>
            <ThemedTitle size="lg" className="pb-10 font-marianne font-bold">
              {questions[currentQuestion].label}
            </ThemedTitle>
            <div className="mb-11">
              <ThemedInput
                label={questions[currentQuestion].label}
                id={questions[currentQuestion].id}
                value={answers[questions[currentQuestion].id] || ""}
                onChange={handleInputChange}
                placeholder={questions[currentQuestion].placeholder}
                required
                size="lg"
                color="gray"
              />
              {error && (
                <span className="text-red-500 text-sm mt-2">{error}</span>
              )}
            </div>
            <div className="mt-auto flex justify-end w-full">
              {allQuestionsAnswered ? (
                <button
                  type="submit"
                  className="w-1/5 flex justify-center items-center bg-white text-blue-600 border-2 border-blue-600
                 font-medium py-3 px-1 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-1000"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="w-1/5 flex justify-center items-center bg-blue-600 text-white
                 font-medium py-3 px-1 rounded-md hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-1000"
                >
                  Save{" "}
                  <span className="ml-2 text-sm text-gray-300">
                    (press Enter ↵)
                  </span>
                </button>
              )}
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
