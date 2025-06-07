export default function PersonCard(props: {
  img: string;
  role: string;
  name: string;
  surname: string;
  description: string;
  leader: boolean;
}) {
  return (
    <div className="flex flex-col item-top justify-center h-fit w-fit hover:drop-shadow-xl">
      <img className="rounded-full" src={props.img} alt={props.role} />
      {props.leader && (
        <p className="text-center font-medium text-6xl mt-10 bg-gradient-to-r from-lazuli-900 to-lazuli-800 text-transparent bg-clip-text inline-block">
          {props.name}
          <br />
          {props.surname}
        </p>
      )}
    </div>
  );
}
