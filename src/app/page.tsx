import Image from "next/image";
import CategoryCarousel from "./components/category-carousel";

export default function Home() {
  return (
    <main className=" w-full">
      <CategoryCarousel className=" inner-page" />
    </main>
  );
}
