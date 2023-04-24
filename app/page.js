import Image from "next/image";
import Header from "./components/header/Header";
import Section1 from "./components/section1/Section1";
import Posts from "./components/posts/Posts";

export default function Home() {
  return (
    <>
      <Section1 />
      <Posts />
    </>
  );
}
