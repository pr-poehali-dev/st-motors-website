import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient">
      {/* Навигация */}
      <nav className="glass-card fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/img/b9c47eaf-6a25-4864-911d-9cc3d24ea144.jpg" 
                alt="ST Motors" 
                className="w-8 h-8 rounded-full"
              />
              <h1 className="text-2xl font-bold text-primary">ST Motors</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="subaru-gradient text-white hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section id="home" className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Автосервис <span className="text-primary">ST Motors</span>
                <br />
                <span className="text-lg text-gray-600">Там где Subaru живёт вечно ⭐</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональный ремонт и обслуживание автомобилей в Челябинске. 
                Мы знаем толк в надёжности — как и вы, если выбрали Subaru! 🚗
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="subaru-gradient text-white hover:opacity-90 animate-pulse-glow">
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Записаться на ремонт
                </Button>
                <Button variant="outline" size="lg" className="glass border-primary hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <img 
                src="/img/eb9439de-1ad0-432f-8cc2-d0e53cc8170d.jpg" 
                alt="Автосервис ST Motors" 
                className="w-full h-auto rounded-2xl shadow-2xl glass-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы не просто чиним машины — мы возвращаем им жизнь! Как говорится, 
              «Love is what makes a Subaru, a Subaru», а мы добавляем к этому профессионализм.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Опыт 15+ лет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  За годы работы мы стали экспертами в области автомобильного ремонта. 
                  Symmetrical All-Wheel Drive — это не просто слова для нас!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Команда профи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Наши мастера знают каждый винтик. Мы работаем с душой, 
                  потому что понимаем — ваш автомобиль это не просто транспорт.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Даём гарантию на все работы. Confidence in Motion — наш девиз, 
                  и мы за него отвечаем!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг для вашего железного коня. От планового ТО до капитального ремонта — 
              мы делаем всё, чтобы ваш Subaru (и любой другой автомобиль) служил верой и правдой.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Settings",
                title: "Диагностика",
                description: "Компьютерная диагностика всех систем автомобиля. Найдём проблему быстрее, чем вы скажете 'WRX STI'!"
              },
              {
                icon: "Wrench",
                title: "Ремонт двигателя",
                description: "Капитальный и текущий ремонт двигателей. Boxer-движки для нас как родные!"
              },
              {
                icon: "Cog",
                title: "Ремонт трансмиссии",
                description: "Ремонт МКПП, АКПП, вариаторов. Lineartronic или что угодно — всё по плечу!"
              },
              {
                icon: "Zap",
                title: "Электрика",
                description: "Ремонт электрооборудования, автосигнализаций, мультимедиа систем."
              },
              {
                icon: "Shield",
                title: "Кузовной ремонт",
                description: "Рихтовка, покраска, полировка. Вернём вашему авто заводской вид!"
              },
              {
                icon: "Gauge",
                title: "ТО и сервис",
                description: "Плановое обслуживание по регламенту. Профилактика — лучшее лечение!"
              }
            ].map((service, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы доверить нам своего железного друга? Звоните, пишите, приезжайте! 
              Мы всегда рады помочь настоящим автолюбителям.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="Phone" size={24} className="mr-3 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-gray-900">+7 982 369 7970</p>
                  <p className="text-gray-600">Доступно в Telegram и WhatsApp</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-900">Челябинск</p>
                  <p className="text-gray-600">ГСК № 8 Автомобилист, дом 2932Е</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon name="Clock" size={24} className="mr-3 text-primary" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-900">Сб: 9:00 - 16:00</p>
                  <p className="text-gray-600">Вс: выходной</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Записаться на ремонт</CardTitle>
                  <CardDescription>
                    Заполните форму или позвоните нам напрямую
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <Button className="flex-1 subaru-gradient text-white hover:opacity-90">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="flex-1 glass border-primary hover:bg-primary/10">
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full glass border-primary hover:bg-primary/10">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                </CardContent>
              </Card>

              <div className="glass-card p-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  💡 Лайфхак: Чтобы ваш Subaru жил долго и счастливо, 
                  проходите ТО вовремя и слушайте звуки, которые он издаёт. 
                  Машина всегда подскажет, когда ей нужна помощь!
                </p>
                <p className="text-xs text-gray-500 italic">
                  "The beauty of all-wheel drive is that it's always working for you" — и мы тоже!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/img/b9c47eaf-6a25-4864-911d-9cc3d24ea144.jpg" 
                  alt="ST Motors" 
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-xl font-bold">ST Motors</h3>
              </div>
              <p className="text-gray-400">
                Профессиональный автосервис в Челябинске. 
                Мы лечим машины с 2009 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Диагностика</li>
                <li>Ремонт двигателя</li>
                <li>Ремонт трансмиссии</li>
                <li>Кузовной ремонт</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 982 369 7970</p>
                <p>Челябинск, ГСК № 8 Автомобилист</p>
                <p>дом 2932Е</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ST Motors. Все права защищены. Made with ❤️ for Subaru lovers!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;