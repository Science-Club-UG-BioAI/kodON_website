import Galery from "./UI/Galery";

export default function ProjectGalery() {
  return (
    <div className="flex flex-col item-center jsutify-center  p-20 h-auto bg-gradient-to-r from-lazuli-900 to-lazuli-800">
      <h1 className="font-fira font-bold text-6xl text-lazuli-200">
        Ostatnie projekty
      </h1>
      <div>
        <Galery />
      </div>
    </div>
  );
}
