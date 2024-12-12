"use client"; // Ensures the component is rendered on the client-side

import React, { useState } from "react";
import ThemedTitle from "@/components/ui/questionnaire-components/themedTitle";
import ThemedInput from "@/components/ui/questionnaire-components/themedInput";
import ThemedTimeline from "@/components/ui/questionnaire-components/themedTimeline";

const Questionnaire: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const timelineOptions = [
    {
      label: "Started Learning React",
      subCategories: [
        { label: "Watched tutorials", href: "#" },
        { label: "Built a basic app", href: "#" },
      ],
    },
    {
      label: "Built My First App",
      subCategories: [
        { label: "Setup project", href: "#" },
        { label: "Added functionality", href: "#" },
      ],
    },
    {
      label: "Joined a Development Team",
      subCategories: [
        { label: "Collaborated on projects", href: "#" },
        { label: "Learned version control", href: "#" },
      ],
    },
    {
      label: "Launched My Portfolio",
      subCategories: [
        { label: "Created portfolio site", href: "#" },
        { label: "Deployed using Netlify", href: "#" },
      ],
    },
    {
      label: "Started Freelancing",
      subCategories: [
        { label: "Built websites for clients", href: "#" },
        { label: "Developed apps", href: "#" },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName });
    alert(`Submitted: ${firstName} ${lastName}`);
  };

  return (
    <div className="flex">
      <div className="w-1/4 flex justify-center bg-blue-100 rounded-lg">
        <ThemedTimeline title="Timeline" options={timelineOptions} />
      </div>
      <div className="w-3/4 flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg max-w-4xl w-full flex flex-col"
        >
          <ThemedTitle size="lg" className="pb-10">
            Alright, let’s start with the basics. What’s your name?
          </ThemedTitle>
          <div className="mb-11">
            <ThemedInput
              label="First Name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
              size="lg"
              color="gray"
            />
          </div>
          <div className="mb-6">
            <ThemedInput
              label="Last Name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
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
