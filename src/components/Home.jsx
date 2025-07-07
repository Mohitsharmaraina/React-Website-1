import Heading from "./Heading";
import ImageCmp from "./ImageCmp";
import About from "./About";
export default function Home() {
  return (
    <div>
      <Heading />
      <div className="flex justify-center items-start p-6 bg-slate-400 borde border-gray-900">
        <ImageCmp />
        <About />
      </div>
    </div>
  );
}
