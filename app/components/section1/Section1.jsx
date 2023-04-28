import Image from "next/image";
import Link from "next/link";
import Author from "../_child/Author";

const Section = () => {
  const bg = {
    background: "url('/images/backgroundd.jpg') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20 py-16 w-9/12 lg:w-100 md:w-100">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {slide()}
      </div>
    </section>
  );
};
function slide() {
  return (
    <div className="grid md:grid-cols-2 text-justify">
      <div className="imgage">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={400} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          -
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              sed, magnam fuga illum aut nobis saepe totam asperiores eos rem
              modi commodi consequatur quo optio similique corrupti ipsa ipsum
              facilis?
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic
          natus. Autem nihil perferendis praesentium inventore amet atque
          eligendi laboriosam aspernatur rerum, assumenda minima dolor ea,
          iusto, aperiam quibusdam dolorem.
        </p>
        <Author />
      </div>
    </div>
  );
}
export default Section;
