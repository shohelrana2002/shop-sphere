// import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
// import React from "react";

// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// interface Props {
//   className?: string;
//   iconClassName?: string;
//   tooltipClassName?: string;
// }
// const socialLink = [
//   {
//     title: "Youtube",
//     href: "https://www.youtube.com/@reactjsBD",
//     icon: <Youtube className="w-5 h-5" />,
//   },
//   {
//     title: "Github",
//     href: "https://www.youtube.com/@reactjsBD",
//     icon: <Github className="w-5 h-5" />,
//   },
//   {
//     title: "Linkedin",
//     href: "https://www.youtube.com/@reactjsBD",
//     icon: <Linkedin className="w-5 h-5" />,
//   },
//   {
//     title: "Facebook",
//     href: "https://www.youtube.com/@reactjsBD",
//     icon: <Facebook className="w-5 h-5" />,
//   },
//   {
//     title: "Slack",
//     href: "https://www.youtube.com/@reactjsBD",
//     icon: <Slack className="w-5 h-5" />,
//   },
// ];

// const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
//   return (
//     <TooltipProvider>
//       <div className={cn("flex items-center gap-3.5", className)}>
//         {socialLink?.map((item) => (
//           <Tooltip key={item?.title}>
//             <TooltipTrigger asChild>
//               <Link
//                 key={item?.title}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={item?.href}
//                 className={cn(
//                   "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
//                   iconClassName
//                 )}
//               >
//                 {item?.icon}
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent
//               className={cn(
//                 "bg-white text-darkColor font-semibold",
//                 tooltipClassName
//               )}
//             >
//               {item?.title}
//             </TooltipContent>
//           </Tooltip>
//         ))}
//       </div>
//     </TooltipProvider>
//   );
// };

// export default SocialMedia;

"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    title: "Facebook",
    href: "#",
    icon: <Facebook size={20} />,
  },
  {
    title: "Instagram",
    href: "#",
    icon: <Instagram size={20} />,
  },
  {
    title: "YouTube",
    href: "#",
    icon: <Youtube size={20} />,
  },
  {
    title: "TikTok",
    href: "#",
    icon: <Music2 size={20} />,
  },
];

const SocialIcon = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex items-center gap-4 mt-10">
        {socialLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="
                  w-10 h-10 flex items-center justify-center 
                  rounded-full border border-shop_light_green
                  text-white hover:text-black 
                  hover:bg-shop_light_green
                  transition-all duration-300 
                  hover:scale-110 active:scale-95 shadow-sm
                "
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            <TooltipContent className="bg-black text-white border border-shop_light_green px-3 py-1">
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialIcon;
