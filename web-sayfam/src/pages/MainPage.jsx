import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function MainPage() {
  const { title, name, description} = useContext(GlobalContext);

  return (
    <section className="max-w-7xl mx-auto px-8 py-14">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-10">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-[1px] bg-purple-600 py"/>
            <p className="font-bold text-purple-600">{name}</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            <button className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Hire Me
            </button>
            <button className="px-5 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
              Git Hub
            </button>
            <button className="px-5 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition">
              Linkedln
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="rounded-xl shadow-lg w-full h-auto"
            src="https://picsum.photos/400/300"
            alt="Example"
          />
        </div>
      </div>
    </section>
  );
}