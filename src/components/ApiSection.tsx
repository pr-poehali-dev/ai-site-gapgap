import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  params: string[];
  example: {
    request: any;
    response: any;
  };
}

interface ApiSectionProps {
  apiEndpoints: ApiEndpoint[];
  simulateApiCall: (endpoint: ApiEndpoint) => void;
}

export default function ApiSection({ apiEndpoints, simulateApiCall }: ApiSectionProps) {
  return (
    <section id="api" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 gradient-text">
            API Endpoints
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простая и мощная интеграция с вашими приложениями
          </p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {apiEndpoints.map((endpoint, index) => (
            <Card key={index} className="border-border/20 bg-card/80 backdrop-blur-lg hover:ai-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Badge 
                    variant={endpoint.method === 'POST' ? 'default' : 'secondary'}
                    className={`font-mono ${endpoint.method === 'POST' ? 'gradient-bg text-white' : 'bg-ai-purple/20 text-ai-purple'}`}
                  >
                    {endpoint.method}
                  </Badge>
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded text-ai-blue">
                    {endpoint.path}
                  </code>
                </div>
                <CardDescription className="text-base">
                  {endpoint.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Параметры:</p>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.params.map((param, paramIndex) => (
                        <Badge key={paramIndex} variant="outline" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-ai-blue text-ai-blue hover:bg-ai-blue/10"
                    onClick={() => simulateApiCall(endpoint)}
                  >
                    <Icon name="Play" size={14} className="mr-2" />
                    Попробовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 ai-glow">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Полная документация API
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="font-orbitron gradient-text">Полная API документация</DialogTitle>
                <DialogDescription>
                  Подробное руководство по всем возможностям API
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Быстрый старт</h4>
                  <pre className="text-sm"><code>{`curl -X POST "https://api.gapgap.ai/v1/chat" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Привет!",
    "model": "gpt-4",
    "temperature": 0.7
  }'`}</code></pre>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Аутентификация</h4>
                    <p className="text-sm text-muted-foreground">
                      Используйте Bearer токен в заголовке Authorization для всех запросов.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Лимиты</h4>
                    <p className="text-sm text-muted-foreground">
                      10,000 запросов в месяц для бесплатного тарифа.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}