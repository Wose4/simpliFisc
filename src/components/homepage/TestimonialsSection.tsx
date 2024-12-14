import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Un service exceptionnel et une équipe à l'écoute !",
      author: "Client 1",
    },
    {
      quote: "Des solutions innovantes qui ont transformé notre activité.",
      author: "Client 2",
    },
  ];

  return (
    <section className="py-20 w-screen bg-blue-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-10">Ce que disent nos clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent>
              <blockquote className="text-gray-600 italic">{testimonial.quote}</blockquote>
              <footer className="mt-4 text-gray-700 font-medium">- {testimonial.author}</footer>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};