import Link from "next/link";
import { Separator } from "./ui/separator";

export default function NavigationItems(props: { items: String[]; vertical: boolean }) {
    const itemsList = props.items.map((item, index) => (
        <li key={index} className='hover:text-foreground/50 transition-colors'>
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
        </li>
    ));
    return (
        <ul className={`${props.vertical ? "grid p-8 text-xl gap-8" : "flex items-center justify-center gap-8"}`}>
            {itemsList}
        </ul>
    )
}