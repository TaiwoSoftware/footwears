import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import illustration from "./illustrationMobille.jpg";
import NavLinks from "./NavLinks";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-gray-950">
          <img src={illustration} alt="shoes" className="w-full opacity-35" />
        </div>
      </div>

      <div className="absolute top-0">
        <div className="flex items-center gap-52 p-4 font-customNunito">
          <Logo />
          <NavLinks />
          <AuthButtons />
        </div>
      </div>
    </>
  );
};
