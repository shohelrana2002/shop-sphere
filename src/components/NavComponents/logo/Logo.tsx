import { cn } from "@/lib/utils";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <div>
      <h2
        className={cn(
          "text-2xl text-shop_dark_green cursor-pointer font-black hoverEffect group tracking-wider font-sans uppercase hover:text-shop_light_green",
          className
        )}
      >
        Shop
        <span
          className={cn(
            "text-shop group-hover:text-shop_dark_green text-shop_light_green ",
            spanDesign
          )}
        >
          Sphere
        </span>
      </h2>
    </div>
  );
};

export default Logo;
