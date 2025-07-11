import bgImage from "../bgImages/headingbg.jpg";
export default function Heading() {
  return (
    <header className="relative w-full h-screen overflow-hidden flex items-center justify-center ">
      <img
        className="absolute inset-0 w-full  h-full object-cover "
        src={bgImage}
        alt="background"
      />
      <div className="relative z-10 text-white text-center p-5 rounded-lg max-w-xl">
        <h2 className="text-[min(10vw,70px)] font-bold mb-2 drop-shadow-lg">
          Kosoku
        </h2>
        <p className="inline text-[min(4vw,50px)] drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
          Inovative, Accelerative, Unleash
        </p>
      </div>
    </header>
  );
}
