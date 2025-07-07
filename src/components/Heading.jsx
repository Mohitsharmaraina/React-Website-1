import bgImage from "../../public/bgImages/headingbg.jpg";
export default function Heading() {
  return (
    <header className="relative w-full h-96 overflow-hidden flex items-center justify-center ">
      <img
        className="absolute inset-0 w-full  h-full object-cover z-0"
        src={bgImage}
        alt="background"
      />
      <div className="relative z-10 text-white text-center p-5 rounded-lg max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Kosoku
        </h2>
        <p className="text-lg md:text-xl drop-shadow-md">
          Inovative, Accelerative, Unleash
        </p>
      </div>
    </header>
  );
}
