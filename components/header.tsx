import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="bg-white h-20 dark:bg-dark-blue flex flex-col items-center justify-center shadow-lg">
      <div className="w-[min(1300px,100%)] flex justify-between items-center px-2">
        <p className="font-bold text-2xl">Where in the world?</p>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
