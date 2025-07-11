import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex w-[45%] h-auto md:80 px-2 bg-slate-200 mt-1 rounded-xl ml-4 py-4  ">
      <p>
        <Link
          to="https://www.kosokutechnologies.com/"
          target=" "
          className="text-blue-800"
        >
          Kosoku Technologies Private Limited
        </Link>{" "}
        is a company focused on,{" "}
        <em className="bg-yellow-200">
          "transforming the structural steel industry through innovative
          solutions, particularly in Tekla Structures and related technologies."
        </em>{" "}
        They offer services in areas like{" "}
        <strong>Tekla modeling, drawing, and reporting</strong> , as well as
        interoperability solutions to streamline workflows between different
        departments. The company also leverages technologies like{" "}
        <strong>BIM, AI, VR, and ML</strong> to enhance their offerings. They
        are based in <strong> Pune, Maharashtra, India.</strong>
      </p>
    </div>
  );
}
