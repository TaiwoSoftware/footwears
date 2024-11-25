import AuthButtons from "./AuthButtons"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

export const NavContainer = () => {
  return (
    <div className="flex items-center gap-52 p-4 font-customNunito">
        <Logo />
        <NavLinks />
        <AuthButtons />
    </div>
  )
}
