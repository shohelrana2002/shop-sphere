import HeaderMenu from "../NavComponents/Header/Header";
import LoginButton from "../NavComponents/LoginButton/LoginButton";
import Logo from "../NavComponents/logo/Logo";
import MobileMenu from "../NavComponents/MobileMenu/MobileMenu";
import CartIcon from "../NavComponents/SearchBar/CartIcon";
import FavoriteIcon from "../NavComponents/SearchBar/FavoriteIcon";
import SearchBar from "../NavComponents/SearchBar/SearchBar";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="bg-white text-lightColor border-b border-black/20 py-5">
      <Container className="flex justify-between items-center">
        {/* logo step-1 */}
        <div className="w-auto md:1/3 flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        {/* Nav Menu step-2 */}
        <HeaderMenu />
        {/* cart menu profile menu step-3 */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteIcon />
          <LoginButton />
        </div>
      </Container>
    </header>
  );
}
