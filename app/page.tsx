import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" bg-blue-950 flex items-center justify-center min-h-screen gap-3.5">
    <h2 className="text-6xl font-bold text-white">Welcome Mr Dev!</h2>
    <div>
    <Button className="animate-bounce">Click Here</Button>
    </div>
   </div>
  );
}
