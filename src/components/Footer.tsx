import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
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
  );
}