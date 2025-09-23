const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/0 text-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="hidden sm:flex h-16 items-center justify-center gap-6">
          <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
            <span className="flex items-center font-semibold">
              <span className="mr-2">//</span>
              <span className="tracking-wider">Início</span>
            </span>
          </button>

          <button className="rounded-sm px-4 py-2 transition hover:text-[#F0944F]">
            <span className="flex items-center font-semibold">
              <span className="mr-2">//</span>
              <span className="tracking-wider">Projetos</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
