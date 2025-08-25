import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    requests: 1000000,
    uptime: 99.9,
    responseTime: 50
  });
  
  // Анимация счетчиков
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          requests: prev.requests + Math.floor(Math.random() * 100)
        }));
      }, 3000),
      
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          responseTime: 45 + Math.floor(Math.random() * 10)
        }));
      }, 2000)
    ];
    
    return () => intervals.forEach(clearInterval);
  }, []);

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/chat",
      description: "Отправить сообщение в AI чат",
      params: ["message", "model", "temperature"],
      example: {
        request: {
          message: "Привет! Как дела?",
          model: "gpt-4",
          temperature: 0.7
        },
        response: {
          response: "Привет! У меня всё отлично, спасибо! Я готов помочь тебе с любыми вопросами. Что тебя интересует?",
          model: "gpt-4",
          tokens: 156
        }
      }
    },
    {
      method: "GET", 
      path: "/api/v1/models",
      description: "Получить список доступных AI моделей",
      params: ["category", "language"],
      example: {
        request: {
          category: "chat",
          language: "ru"
        },
        response: {
          models: [
            { name: "gpt-4", category: "chat", languages: ["ru", "en"] },
            { name: "claude-3", category: "chat", languages: ["ru", "en"] },
            { name: "llama-2", category: "text", languages: ["en"] }
          ]
        }
      }
    },
    {
      method: "POST",
      path: "/api/v1/analyze",
      description: "Анализ текста с помощью ИИ",
      params: ["text", "analysis_type", "language"],
      example: {
        request: {
          text: "Это отличный продукт! Очень доволен покупкой.",
          analysis_type: "sentiment",
          language: "ru"
        },
        response: {
          sentiment: "positive",
          confidence: 0.95,
          emotions: ["joy", "satisfaction"],
          summary: "Положительный отзыв о продукте"
        }
      }
    }
  ];

  const simulateApiCall = async (endpoint: any) => {
    setIsLoading(true);
    setApiResponse("Отправка запроса...");
    
    setTimeout(() => {
      setApiResponse(JSON.stringify(endpoint.example.response, null, 2));
      setIsLoading(false);
    }, 1500);
  };

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

  const features = [
    {
      icon: "Brain",
      title: "Нейросети последнего поколения",
      description: "Используем самые современные языковые модели для максимальной точности"
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Обработка запросов за миллисекунды благодаря оптимизированной инфраструктуре"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Шифрование end-to-end и полное соответствие GDPR требованиям"
    },
    {
      icon: "Code",
      title: "RESTful API",
      description: "Простая интеграция с любым приложением через стандартные HTTP запросы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center ai-glow">
                <Icon name="Bot" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-orbitron font-bold gradient-text">GAPGAP AI</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">API</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient-bg text-white hover:opacity-90 ai-glow">
                    Начать работу
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-orbitron gradient-text">Регистрация разработчика</DialogTitle>
                    <DialogDescription>
                      Получите API ключ для начала работы с GapGap AI
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="developer@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input id="company" placeholder="Моя крутая стартап" />
                    </div>
                    <div>
                      <Label htmlFor="use-case">Планы использования</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите вариант" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chatbot">Чат-бот</SelectItem>
                          <SelectItem value="analysis">Анализ текста</SelectItem>
                          <SelectItem value="automation">Автоматизация</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full gradient-bg text-white hover:opacity-90">
                      <Icon name="Key" size={16} className="mr-2" />
                      Получить API ключ
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ai-blue/10 to-ai-purple/10"></div>
        <div className="container mx-auto relative">
          <div className="floating mb-8">
            <img 
              src="/img/c6b873aa-6b25-493d-bf92-8d80c5238ca2.jpg" 
              alt="AI Robot" 
              className="w-32 h-32 mx-auto rounded-full ai-glow object-cover"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6 gradient-text animate-slide-up">
            ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Революционная платформа для работы с ИИ. Создавайте, анализируйте и автоматизируйте с помощью передовых нейросетей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 ai-glow animate-pulse-glow">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Запустить ИИ
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-orbitron gradient-text">AI Демонстрация</DialogTitle>
                  <DialogDescription>
                    Попробуйте наши AI возможности прямо сейчас
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="chat" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="chat">Чат</TabsTrigger>
                    <TabsTrigger value="analysis">Анализ</TabsTrigger>
                    <TabsTrigger value="models">Модели</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chat" className="space-y-4">
                    <div>
                      <Label>Ваше сообщение</Label>
                      <Textarea placeholder="Напишите сообщение AI..." />
                    </div>
                    <Button className="w-full gradient-bg text-white" onClick={() => simulateApiCall(apiEndpoints[0])}>
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить
                    </Button>
                  </TabsContent>
                  <TabsContent value="analysis" className="space-y-4">
                    <div>
                      <Label>Текст для анализа</Label>
                      <Textarea placeholder="Введите текст для анализа настроений..." defaultValue="Это отличный продукт! Очень доволен покупкой." />
                    </div>
                    <Button className="w-full gradient-bg text-white" onClick={() => simulateApiCall(apiEndpoints[2])}>
                      <Icon name="BarChart3" size={16} className="mr-2" />
                      Анализировать
                    </Button>
                  </TabsContent>
                  <TabsContent value="models" className="space-y-4">
                    <p className="text-muted-foreground">Получить список доступных AI моделей</p>
                    <Button className="w-full gradient-bg text-white" onClick={() => simulateApiCall(apiEndpoints[1])}>
                      <Icon name="Database" size={16} className="mr-2" />
                      Загрузить модели
                    </Button>
                  </TabsContent>
                </Tabs>
                {(apiResponse || isLoading) && (
                  <div className="mt-4">
                    <Label>Ответ API:</Label>
                    <pre className="mt-2 p-4 bg-muted rounded-lg text-sm overflow-auto max-h-48 font-mono">
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin w-4 h-4 border-2 border-ai-blue border-t-transparent rounded-full"></div>
                          <span>Обработка запроса...</span>
                        </div>
                      ) : (
                        apiResponse
                      )}
                    </pre>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                  <Icon name="FileCode" size={20} className="mr-2" />
                  API документация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-orbitron gradient-text">API Документация</DialogTitle>
                  <DialogDescription>
                    Полное руководство по интеграции с GapGap AI
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 max-h-96 overflow-y-auto">
                  {apiEndpoints.map((endpoint, index) => (
                    <Card key={index} className="border-border/20">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <CardDescription>{endpoint.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-medium">Запрос:</Label>
                            <pre className="mt-1 p-2 bg-muted rounded text-xs">
                              {JSON.stringify(endpoint.example.request, null, 2)}
                            </pre>
                          </div>
                          <div>
                            <Label className="text-sm font-medium">Ответ:</Label>
                            <pre className="mt-1 p-2 bg-muted rounded text-xs">
                              {JSON.stringify(endpoint.example.response, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
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

      {/* Features Section */}
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

      {/* API Section */}
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



      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded gradient-bg flex items-center justify-center">
                  <Icon name="Bot" size={16} className="text-white" />
                </div>
                <span className="font-orbitron font-bold gradient-text">GAPGAP AI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Передовая платформа искусственного интеллекта для разработчиков и бизнеса.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукт</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#api" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 GAPGAP AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}