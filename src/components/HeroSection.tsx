import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

interface HeroSectionProps {
  apiEndpoints: ApiEndpoint[];
  simulateApiCall: (endpoint: ApiEndpoint) => void;
  apiResponse: string;
  isLoading: boolean;
}

export default function HeroSection({ apiEndpoints, simulateApiCall, apiResponse, isLoading }: HeroSectionProps) {
  return (
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
  );
}