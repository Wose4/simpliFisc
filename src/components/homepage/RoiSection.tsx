import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const roiData = [
    { title: "+50%", description: "Augmentation de l'efficacité opérationnelle grâce à notre solution." },
    { title: "3x", description: "Retour sur investissement en seulement trois mois d'utilisation." },
    { title: "95%", description: "Satisfaction des utilisateurs après l'adoption de notre service." },
  ];

export const ROISummary: React.FC = () => {

  return (
    <section className="py-20 w-screen bg-white px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Impact mesurable avec notre solution</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roiData.map((data, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-6xl font-bold text-blue-600">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              <p>{data.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};