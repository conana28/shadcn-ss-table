import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Button>
        <Link href="/bottle-table">Bottle table</Link>
      </Button>
    </div>
  );
}
