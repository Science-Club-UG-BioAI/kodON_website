import { Button } from "./UI/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 ">this is home</h1>
      <Button onClick={() => console.log("jakaś fajna funkcja")} size="medium">
        dołącz do nas
      </Button>
    </div>
  );
}
