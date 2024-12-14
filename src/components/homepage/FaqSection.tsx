import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is it accessible?",
      answer: "Yes, this FAQ component is fully accessible with keyboard navigation and screen readers.",
    },
    {
      question: "Is it styled?",
      answer: "Yes, it is styled using TailwindCSS and customizable via your own Tailwind configuration.",
    },
    {
      question: "Is it animated?",
      answer: "Yes, it includes smooth animations powered by Radix UI and CSS transitions.",
    },
  ];

  return (
    <section className="py-20 w-screen bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};