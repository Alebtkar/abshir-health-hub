import { CheckCircle2, Star, ShieldCheck, Truck, HeadphonesIcon } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Star,
      title: "جودة عالية",
      description: "نقدم منتجات طبية معتمدة عالمياً تلبي أعلى معايير الجودة والسلامة الصحية",
    },
    {
      icon: ShieldCheck,
      title: "موثوقية تامة",
      description: "نلتزم بتقديم خدمات موثوقة وشفافة تضمن رضا عملائنا الكامل",
    },
    {
      icon: Truck,
      title: "خدمة متميزة",
      description: "نوفر خدمة توريد سريعة وفعالة لجميع أنحاء ليبيا",
    },
    {
      icon: HeadphonesIcon,
      title: "دعم مستمر",
      description: "فريق متخصص جاهز للإجابة على استفساراتكم وتقديم الدعم الفني",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            لماذا نحن
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            ما يميزنا عن غيرنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نسعى دائماً لتقديم الأفضل لعملائنا من خلال الالتزام بأعلى معايير الجودة والخدمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">مضمون ومعتمد</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
