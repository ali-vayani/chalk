import Image from "next/image";
import DashedLine from "./components/dashedLine";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      {/* this does the side bar scrolling thing */}
      <div className="w-40 h-full fixed test"/>
      <DashedLine/>

      <div className="flex flex-col p-6">
        <h1 className="text-text text-3xl fixed">chalk</h1>
        <div className="w-full h-full">
          
        </div>
      </div>

    </div>
  );
}
