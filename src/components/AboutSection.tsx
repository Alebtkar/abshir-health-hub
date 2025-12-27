import { Shield, Award, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "جودة عالية",
      description: "نوفر منتجات طبية بأعلى معايير الجودة العالمية",
    },
    {
      icon: Award,
      title: "خبرة واسعة",
      description: "سنوات من الخبرة في مجال المعدات الطبية",
    },
    {
      icon: Heart,
      title: "التزام تام",
      description: "نلتزم بتقديم أفضل الخدمات لعملائنا",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من الخبراء المتخصصين في المجال الطبي",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              شريككم الموثوق في
              <span className="text-gradient"> المعدات الطبية</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              شركة ابشر للمعدات والمستلزمات الطبية هي شركة ليبية رائدة متخصصة في توفير وبيع المستلزمات الطبية بأعلى جودة. نحن نخدم المؤسسات الصحية والمستشفيات والعيادات والأفراد بكل احترافية والتزام.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              نسعى دائماً لتقديم أفضل المنتجات الطبية المعتمدة عالمياً، مع الالتزام بمعايير الجودة والسلامة الصحية، لنكون شريككم الموثوق في تعزيز القطاع الصحي الليبي.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:text-secondary transition-colors" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                <div className="gradient-primary rounded-xl p-8 text-center">
                  <div className="text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
                    ابشر
                  </div>
                  <p className="text-primary-foreground/90 text-lg">
                    للمعدات والمستلزمات الطبية
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-card rounded-lg p-4 text-center shadow-soft">
                    <div className="text-3xl font-bold text-primary">+١٠٠</div>
                    <p className="text-sm text-muted-foreground">منتج طبي</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center shadow-soft">
                    <div className="text-3xl font-bold text-secondary">+٥٠</div>
                    <p className="text-sm text-muted-foreground">عميل راضٍ</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
