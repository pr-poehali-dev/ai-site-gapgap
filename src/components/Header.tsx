import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
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
  );
}