import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PerformanceSection from "@/components/PerformanceSection";
import FeaturesSection from "@/components/FeaturesSection";
import ApiSection from "@/components/ApiSection";
import Footer from "@/components/Footer";

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
      <Header />
      <HeroSection 
        apiEndpoints={apiEndpoints}
        simulateApiCall={simulateApiCall}
        apiResponse={apiResponse}
        isLoading={isLoading}
      />
      <PerformanceSection stats={stats} />
      <FeaturesSection features={features} />
      <ApiSection 
        apiEndpoints={apiEndpoints}
        simulateApiCall={simulateApiCall}
      />
      <Footer />
    </div>
  );
}