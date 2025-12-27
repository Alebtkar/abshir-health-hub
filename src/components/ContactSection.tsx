import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "الهاتف",
      value: "+218 91 502 0618",
      href: "tel:+218915020618",
    },
    {
      icon: Phone,
      label: "الهاتف",
      value: "+218 92 008 5195",
      href: "tel:+218920085195",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "contact@abshr.ly",
      href: "mailto:contact@abshr.ly",
    },
    {
      icon: MapPin,
      label: "الموقع",
      value: "ليبيا",
      href: "#map",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            نحن هنا لخدمتكم
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            لا تتردد في التواصل معنا لأي استفسار أو طلب. فريقنا جاهز لمساعدتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">معلومات التواصل</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-semibold" dir="ltr">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Company Info */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
              <h4 className="text-lg font-bold text-foreground mb-2">شركة ابشر</h4>
              <p className="text-muted-foreground">
                للمعدات والمستلزمات الطبية
              </p>
              <p className="text-sm text-muted-foreground mt-2" dir="ltr">
                abshr.ly
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-right"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="أدخل رقم هاتفك"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  dir="ltr"
                  className="text-left"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="text-right resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
