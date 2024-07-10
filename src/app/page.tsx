import Image from "next/image";
import DashedLine from "./components/dashedLine";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      {/* this does the side bar scrolling thing */}
      <div className="w-40 h-full fixed test"/>
      <DashedLine/>

      <div className="flex flex-col p-6 h-screen">
        <h1 className="text-text text-3xl fixed">chalk</h1>
        <div className="w-full h-full flex flex-col justify-center pl-48">
          <h1 className="text-text text-8xl mb-6">Write Your Future With <br/><span className="text-accent">Chalk</span> Tutoring</h1>
          <button className="px-5 py-2 bg-accent text-text rounded-lg text-xl w-40">Learn More</button>
        </div>
      </div>

    </div>
  );
}
