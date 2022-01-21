import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Image
          src={"/images/pokeball.png"}
          width={"30"}
          height={"30"}
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/sobre"}>sobre</Link>
        </li>
      </ul>
    </nav>
  );
}