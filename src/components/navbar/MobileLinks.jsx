import { Link } from "react-router-dom";

function MobileLinks({ data, isOpen }) {
  return (
    <div
      className={`absolute left-0 sm:hidden bg-primary gap-4 ${
        isOpen
          ? "transition-all duration-300 top-[100%] left-0 sm:top-auto sm:bottom-0 opacity-100"
          : "top-[-1000%] left-0 transition-all duration-300 opacity-0"
      } flex justify-center items-center w-full h-[60vh] z-40`}
    >
      <ul className="flex flex-col gap-8 justify-center items-center text-center">
        <li className="text-accent font-bold text-2xl">
          <Link to={"/signup"}> {data?.navbarLinks["link-one"]} </Link>
        </li>
        <li className="text-white font-bold text-2xl">
          <Link to={"/signin"}> {data?.navbarLinks["link-two"]} </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileLinks;
