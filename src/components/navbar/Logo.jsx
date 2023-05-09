import { Link } from "react-router-dom";

function Logo({ data }) {
  return (
    <>
      <Link
        to={"/"}
        className="flex items-center gap-2 relative z-50 basis-[50%]"
      >
        <img
          className="inline max-w-[20%] sm:max-w-[10%]"
          src={data?.logo}
          alt={data?.logoAlt}
        />
        <span className="font-bold text-md sm:text-xl lg:text-2xl ">
          {data?.companyName}
        </span>
      </Link>
    </>
  );
}

export default Logo;
