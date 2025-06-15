export default function PersonCard(props: {
  img: string;
  role: string;
  name: string;
  surname: string;
  description: string;
  leader: boolean;
  onClick?: () => void;
  size?: "lg" | "sm";
}) {
  const sizeClass = props.size === "sm" ? "w-40 h-40" : "w-60 h-60";

  return (
    <div
      onClick={props.onClick}
      className="flex flex-col items-center justify-center cursor-pointer hover:drop-shadow-xl"
    >
      <img
        className={`rounded-full ${sizeClass}`}
        src={props.img}
        alt={props.role}
      />
      {props.leader && props.size !== "sm" && (
        <p className="text-center font-mono font-bold text-xl mt-4">
          {props.name} {props.surname}
        </p>
      )}
    </div>
  );
}
