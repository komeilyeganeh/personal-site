import { FaBars } from "react-icons/fa";

export const NavbarBtn = ({onToggleMenu}) => {
    return <div className="lg:hidden z-10 rounded-full">
    <FaBars
      size={45}
      color="#fff"
      className="p-2 cursor-pointer"
      onClick={onToggleMenu}
    />
  </div>
}