import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PerformanceChart = () => {
  const [data, setData] = useState([40, 45, 35, 50, 49, 60, 70, 91, 85, 78, 82, 90]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev.slice(1), 70 + Math.random() * 30]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  const maxValue = Math.max(...data);
  
  return (
    <div className="w-full h-48 flex items-end justify-between gap-2 p-4 bg-card/20 rounded-lg">
      {data.map((value, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-ai-blue to-ai-purple rounded-t transition-all duration-500 ease-out min-w-[20px] ai-glow"
          style={{
            height: `${(value / maxValue) * 100}%`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

interface PerformanceSectionProps {
  stats: {
    requests: number;
    uptime: number;
    responseTime: number;
  };
}

export default function PerformanceSection({ stats }: PerformanceSectionProps) {
  return (
    <section className="py-20 px-4 bg-card/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 gradient-text">
            Производительность в реальном времени
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Следите за метриками системы в режиме реального времени
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-border/20 bg-card/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="font-orbitron flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2 text-ai-blue" />
                График производительности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Время ответа (мс) за последние 12 запросов
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-border/20 bg-card/50 backdrop-blur-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                  {stats.requests.toLocaleString()}+
                </div>
                <p className="text-muted-foreground">API запросов в день</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-card/50 backdrop-blur-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                  {stats.uptime}%
                </div>
                <p className="text-muted-foreground">Время работы</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20 bg-card/50 backdrop-blur-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-orbitron font-bold gradient-text mb-2">
                  {stats.responseTime}ms
                </div>
                <p className="text-muted-foreground">Среднее время ответа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}