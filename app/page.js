import Image from "next/image";
import Navbar from "./components/navbar";
import Main from "./components/main_section/main";
import Scroll from "./components/scroll/scroll";
import Service from "./components/services/service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Scroll />
      <Service />
    </>
  );
}
