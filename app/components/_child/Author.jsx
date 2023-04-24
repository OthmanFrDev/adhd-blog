import Image from "next/image";
import Link from "next/link";

const Author = () => {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/author.jpg"}
        className="rounded-full"
        width={60}
        height={60}
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <span className="text-md font-bold text-gray-800 hover:text-gray-500">
            Othman FROUKH
          </span>
        </Link>
        <span className="text-sm text-gray-500">CEO & Founder</span>
      </div>
    </div>
  );
};

export default Author;
