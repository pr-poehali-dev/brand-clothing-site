import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('materials');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">ECO CLOTHING</h1>
            <div className="flex gap-8">
              {[
                { id: 'materials', label: 'Материалы' },
                { id: 'about', label: 'О Бренде' },
                { id: 'ecology', label: 'Экология' },
                { id: 'collection', label: 'Коллекция' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Наша Устойчивая
              <br />
              Коллекция
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Создаем одежду из экологичных материалов с заботой о планете и будущих поколениях
            </p>
            <Button size="lg" className="rounded-full px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Наши Материалы</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое волокно выбрано с учетом экологичности и долговечности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sprout',
                title: '100% Органический Хлопок',
                description: 'Выращен без пестицидов и химикатов. Сертифицирован GOTS. На 91% меньше воды при производстве.'
              },
              {
                icon: 'TreePine',
                title: 'Переработанный Полиэстер',
                description: 'Изготовлен из переработанных пластиковых бутылок. Снижает отходы на 59%. Такое же качество, как первичный материал.'
              },
              {
                icon: 'Leaf',
                title: 'Лен и Конопля',
                description: 'Растут без искусственного полива. Биоразлагаемые материалы. Прочные и дышащие ткани.'
              }
            ].map((material, index) => (
              <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={material.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{material.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden">
            <img
              src="/img/3b916868-6b7b-4e3d-af44-bc72d0d1a390.jpg"
              alt="Органические материалы"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-6">О Бренде</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы верим, что мода должна быть не только красивой, но и ответственной. С 2020 года 
                создаем качественную одежду, которая уважает природу и людей.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша миссия — доказать, что устойчивая мода может быть доступной и стильной. 
                Каждое изделие производится с минимальным воздействием на окружающую среду.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'Award', text: 'Fair Trade сертификация' },
                  { icon: 'Users', text: 'Честная оплата труда' },
                  { icon: 'Recycle', text: 'Zero waste производство' },
                  { icon: 'Shield', text: 'Прозрачная цепочка' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={item.icon} size={24} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/13c98d58-b7bb-4c85-8c1a-78063cfdb209.jpg"
                alt="О бренде"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ecology" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-scale-in">
              <img
                src="/img/d9436292-a1bd-4442-b5dc-18a276cd4c21.jpg"
                alt="Экология"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h3 className="text-4xl font-bold mb-6">Экология Производства</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы ответственно относимся к каждому этапу производства — от выращивания волокон 
                до упаковки готовых изделий.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Снижение выбросов CO₂',
                    value: '87%',
                    description: 'По сравнению с традиционным производством'
                  },
                  {
                    title: 'Экономия воды',
                    value: '2.5 млн л',
                    description: 'Ежегодно за счет эффективных технологий'
                  },
                  {
                    title: 'Возобновляемая энергия',
                    value: '100%',
                    description: 'Все фабрики работают на солнечной энергии'
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{stat.title}</h4>
                      <span className="text-3xl font-bold text-primary">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Наша Коллекция</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Минималистичный дизайн, высокое качество и забота об окружающей среде
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовая футболка',
                material: '100% органический хлопок',
                price: '2 990 ₽',
                image: '/img/13c98d58-b7bb-4c85-8c1a-78063cfdb209.jpg'
              },
              {
                name: 'Льняная рубашка',
                material: 'Европейский лен',
                price: '5 490 ₽',
                image: '/img/3b916868-6b7b-4e3d-af44-bc72d0d1a390.jpg'
              },
              {
                name: 'Худи из переработанного полиэстера',
                material: 'rPET из океанского пластика',
                price: '4 290 ₽',
                image: '/img/13c98d58-b7bb-4c85-8c1a-78063cfdb209.jpg'
              }
            ].map((product, index) => (
              <Card key={index} className="group overflow-hidden animate-scale-in hover:shadow-xl transition-all">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{product.material}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Посмотреть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold text-lg mb-4">ECO CLOTHING</h5>
              <p className="text-sm opacity-90">Устойчивая мода для осознанных людей</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Компания</h6>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Производство</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Покупателям</h6>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Доставка</li>
                <li>Возврат</li>
                <li>Уход за изделиями</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-sm opacity-90">
                <li>info@ecoclothing.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            © 2024 ECO CLOTHING. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
