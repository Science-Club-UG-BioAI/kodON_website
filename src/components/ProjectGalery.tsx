import Galery from "./UI/Galery";

export default function ProjectGalery() {
  return (
    <main className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-lazuli-900 to-lazuli-800" />
      <div className="absolute inset-0 bg-[url('/codebcg.png')] bg-cover bg-no-repeat bg-center opacity-100 blur-xs" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="relative font-fira font-bold px-4 text-4xl text-lazuli-200">
          Ostatnie projekty
        </h2>
        <Galery />
      </div>
    </main>
  );
}
