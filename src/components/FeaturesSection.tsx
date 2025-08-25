import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 gradient-text">
            Возможности платформы
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощные инструменты для работы с искусственным интеллектом
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/20 bg-card/50 backdrop-blur-lg hover:bg-card/80 transition-all duration-300 hover:ai-glow group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-bg flex items-center justify-center group-hover:animate-pulse-glow">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="font-orbitron">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}