import Image from "next/image";
import DashedLine from "./components/dashedLine";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      {/* this does the side bar scrolling thing */}
      <div className="w-40 h-full fixed test"/>
      <DashedLine/>
      <h1 className="text-text text-3xl fixed p-6 ">chalk</h1>
      <div className="flex flex-col h-screen">
        <div className="w-full h-full flex flex-col justify-center pl-48">
          <h1 className="text-text text-7xl mb-6">Write Your Future With <br/><span className="text-accent">Chalk</span> Tutoring</h1>
          <button className="px-5 py-2 bg-accent text-text rounded-lg text-xl w-40">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="w-full h-full flex flex-col justify-center pr-36 items-end">
          <h1 className="text-text text-7xl mb-12"><span className="text-accent">Who</span> are we?</h1>
          <p className="text-text text-4xl text-end tracking-wide leading-tight">Lorem Ipsum Dolor Sit Amet, <span className="text-accent">Consectetur</span><br />
            Adipiscing Elit, Sed Do <span className="text-accent">Eiusmod</span>  Tempor <br />
            <span className="text-accent">Incididunt</span> Ut Labore Et Dolore Magna
          </p>
        </div>
      </div>
    </div>
  );
}
