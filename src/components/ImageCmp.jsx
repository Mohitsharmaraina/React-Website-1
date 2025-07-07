import sideLogo from "../../public/bgImages/bgSide.jpeg";

export default function ImageCmp() {
  return (
    <div className="relative w-[45%] h-80 ml-2 bg-slate-900  overflow-hidden rounded-xl">
      <img
        className="absolute h-full w-full object-cover z-0"
        src={sideLogo}
        alt="sideLogo"
      />
    </div>
  );
}
