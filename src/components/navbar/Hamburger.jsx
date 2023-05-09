function Hamburger({ isOpen, handleMenu }) {
  return (
    <div
      className="w-6 h-5 cursor-pointer relative flex flex-col items-center justify-center sm:hidden"
      onClick={handleMenu}
    >
      <span
        className={`z-50 ${
          isOpen
            ? "bg-transparent before:rotate-45 before:top-[50%] after:-rotate-[45deg] after:top-[50%] "
            : ""
        } transition-all duration-300 before:transition-all before:duration-300 after:transition-all after:duration-300 w-full h-1 rounded-lg bg-accent before:absolute before:w-full before:h-1 before:rounded-lg before:bg-accent before:top-0 after:absolute after:w-full after:h-1 after:rounded-lg after:bg-accent after:bottom-0`}
      ></span>
    </div>
  );
}

export default Hamburger;
