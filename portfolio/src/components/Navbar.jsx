import { bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex w-full screen-max-width">
        <div className="text-lg font-bold">
          <span>Mehedi Robin</span>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer"
              key={i}>
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <div>
            <img
              src={searchImg}
              alt=""
              width={18}
              height={18}
            />
          </div>
          <div>
            <img
              src={bagImg}
              alt=""
              width={18}
              height={18}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
