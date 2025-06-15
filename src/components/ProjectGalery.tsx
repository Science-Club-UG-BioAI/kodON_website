import Galery from "./UI/Galery";

export default function ProjectGalery() {
  return (
    <div className="w-full bg-gradient-to-r from-lazuli-900 to-lazuli-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-fira font-bold text-6xl text-lazuli-200">
          Ostatnie projekty
        </h1>
        <div>
          <Galery />
        </div>
      </div>
    </div>
  );
}
