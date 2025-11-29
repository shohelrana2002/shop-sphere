import { currentUser } from "@clerk/nextjs/server";
import HeaderMenu from "../NavComponents/Header/Header";
import LoginButton from "../NavComponents/LoginButton/LoginButton";
import Logo from "../NavComponents/logo/Logo";
import MobileMenu from "../NavComponents/MobileMenu/MobileMenu";
import CartIcon from "../NavComponents/SearchBar/CartIcon";
import FavoriteIcon from "../NavComponents/SearchBar/FavoriteIcon";
import SearchBar from "../NavComponents/SearchBar/SearchBar";
import Container from "./Container";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <header className="bg-white text-lightColor py-5">
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
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <LoginButton />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
