import PersonCard from "./PersonCard";

export default function Leaders() {
  return (
    <div className="font-fira flex flex-col item-center jsutify-center h-auto w-full bg-lazuli-400 p-20">
      <h1 className="font-bold text-6xl bg-gradient-to-r from-lazuli-900 to-lazuli-600 text-transparent bg-clip-text inline-block">
        {"Zarząd"}
      </h1>
      <div className="cursor-pointer mt-10 flex flex-row item-center justify-center w-full gap-x-50">
        <PersonCard
          img={"src\\assets\\img\\Prezes.png"}
          role={"Prezes"}
          name={"Mateusz"}
          surname={"Gawin"}
          description={""}
          leader={true}
        />
        <PersonCard
          img={"src\\assets\\img\\Vice_Prezes.png"}
          role={"Vice Prezes"}
          name={"Jan"}
          surname={"Wolski"}
          description={""}
          leader={true}
        />
      </div>
    </div>
  );
}
