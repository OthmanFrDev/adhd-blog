import Link from "next/link";
import { ImFacebook, ImYoutube, ImTwitch } from "react-icons/im";
import NewsLetter from "../_child/NewsLetter";
const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={""}>
              <ImFacebook color="#888888" />
            </Link>
            <Link href={""}>
              <ImYoutube color="#888888" />
            </Link>
            <Link href={""}>
              <ImTwitch color="#888888" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright © 2023 Jana Diane. All rights reserved.
          </p>
          <p className="text-gray-400 text-center">Terms and conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
