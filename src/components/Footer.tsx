import { Phone, Mail, Globe, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">أ</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">شركة ابشر</h3>
                <p className="text-card/70 text-sm">للمعدات والمستلزمات الطبية</p>
              </div>
            </div>
            <p className="text-card/80 leading-relaxed max-w-md">
              شركة ابشر للمعدات والمستلزمات الطبية - توفير وبيع المستلزمات الطبية بأعلى جودة. نخدم المؤسسات الصحية والأفراد بكل احترافية والتزام.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+218915020618"
                  className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+218 91 502 0618</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+218920085195"
                  className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+218 92 008 5195</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@abshr.ly"
                  className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span dir="ltr">contact@abshr.ly</span>
                </a>
              </li>
              <li>
                <a
                  href="https://abshr.ly"
                  className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span dir="ltr">abshr.ly</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61568711308183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>فيسبوك</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-card/80 hover:text-card transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-card/80 hover:text-card transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-card/80 hover:text-card transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-card/80 hover:text-card transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm">
              © {new Date().getFullYear()} شركة ابشر للمعدات والمستلزمات الطبية. جميع الحقوق محفوظة.
            </p>
            <p className="text-card/60 text-sm">
              Design by{" "}
              <a
                href="https://mnfd.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-card hover:underline"
              >
                منفذ – mnfd.ly
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
