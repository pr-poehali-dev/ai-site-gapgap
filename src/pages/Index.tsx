import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/chat",
      description: "Отправить сообщение в AI чат",
      params: ["message", "model", "temperature"]
    },
    {
      method: "GET", 
      path: "/api/v1/models",
      description: "Получить список доступных AI моделей",
      params: ["category", "language"]
    },
    {
      method: "POST",
      path: "/api/v1/analyze",
      description: "Анализ текста с помощью ИИ",
      params: ["text", "analysis_type", "language"]
    }
  ];

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
              <Button className="gradient-bg text-white hover:opacity-90 ai-glow">
                Начать работу
              </Button>
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
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 ai-glow animate-pulse-glow">
              <Icon name="Rocket" size={20} className="mr-2" />
              Запустить ИИ
            </Button>
            <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
              <Icon name="FileCode" size={20} className="mr-2" />
              API документация
            </Button>
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
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Параметры:</p>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.params.map((param, paramIndex) => (
                        <Badge key={paramIndex} variant="outline" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 ai-glow">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Полная документация API
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="text-4xl font-orbitron font-bold gradient-text">1M+</h4>
              <p className="text-muted-foreground">API запросов в день</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-orbitron font-bold gradient-text">99.9%</h4>
              <p className="text-muted-foreground">Время работы</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-orbitron font-bold gradient-text">50ms</h4>
              <p className="text-muted-foreground">Среднее время ответа</p>
            </div>
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
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
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