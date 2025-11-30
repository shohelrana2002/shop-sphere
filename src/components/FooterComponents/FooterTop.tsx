import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React from "react";

export interface IContactItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const contactItems: IContactItem[] = [
  {
    title: "Visit Us",
    subtitle: "New Orleans, USA",
    icon: <MapPin className="h-6 w-6 text-shop_dark_green transition" />,
  },
  {
    title: "Call Now",
    subtitle: "+1 202 555 0147",
    icon: <Phone className="h-6 w-6 text-shop_dark_green transition" />,
  },
  {
    title: "Email",
    subtitle: "support@yourshop.com",
    icon: <Mail className="h-6 w-6 text-shop_dark_green transition" />,
  },
  {
    title: "Working Hours",
    subtitle: "Mon – Sat: 10:00am – 8:00pm",
    icon: <Clock className="h-6 w-6 text-shop_dark_green transition" />,
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b border-gray-200">
      {contactItems.map((item) => (
        <div
          key={item.title}
          className="
            group flex items-start gap-4 p-6 rounded-xl
            bg-white shadow-sm border border-gray-100
            hover:shadow-lg hover:border-shop_dark_green/30
            transition-all duration-300 cursor-pointer
          "
        >
          {/* Icon Circle */}
          <div
            className="
              w-12 h-12 rounded-full flex items-center justify-center bg-shop_light_green/10 transition-all duration-300 "
          >
            <div className="group-hover:text-white">{item.icon}</div>
          </div>

          {/* Text Section */}
          <div>
            <h5
              className="
                text-lg font-semibold text-gray-800
                group-hover:text-shop_dark_green transition-colors
              "
            >
              {item.title}
            </h5>

            <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
