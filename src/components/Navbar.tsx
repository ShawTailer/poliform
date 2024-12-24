import { NavbarLink } from "@/constant";
const Navbar = () => {
  const name = "Phat Nguyen Phuc Bao";
  const title = "Software Engineer";
  return (
    <div className="fixed top-0 w-full h-[100px] flex justify-between items-center px-10 md:px-20 bg-white">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative"></div>
        <h1 className="text-black text-[25px] font-bold">
          {name}{" "}
          <span className="text-black-50 text-[20px] font-normal">
            {" "}
            / {title}{" "}
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-4">
        {NavbarLink.map((e) => (
          <a
            className="font-light text-[14px] hover:text-blue-500"
            key={e.name}
            href={e.href}
          >
            {e.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
