import { Stethoscope, Package, Truck, HandshakeIcon } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "توفير المعدات الطبية",
      description: "نوفر أحدث المعدات الطبية من أفضل العلامات التجارية العالمية بجودة عالية وأسعار منافسة",
    },
    {
      icon: Package,
      title: "بيع المستلزمات الطبية",
      description: "مجموعة واسعة من المستلزمات الطبية اليومية والضرورية للمستشفيات والعيادات والأفراد",
    },
    {
      icon: Truck,
      title: "توريد المنتجات الطبية",
      description: "خدمة توريد سريعة وموثوقة للمنتجات الطبية لجميع المؤسسات الصحية في ليبيا",
    },
    {
      icon: HandshakeIcon,
      title: "خدمة موثوقة للقطاع الطبي",
      description: "شراكة طويلة الأمد مع المؤسسات الصحية مبنية على الثقة والالتزام والجودة",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            ما نقدمه لكم
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات لتلبية احتياجاتكم في مجال المعدات والمستلزمات الطبية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex gap-6 p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
