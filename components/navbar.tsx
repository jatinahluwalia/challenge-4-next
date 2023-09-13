import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 dark:bg-dark-blue flex justify-between items-center px-20 shadow-lg">
      <p className="font-bold text-2xl">Where in the world?</p>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
