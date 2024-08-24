import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function Statistica() {
    return (
        <main className="bg-milk_gray py-[20px] flex justify-center gap-[20px] relative">
            <LinksNo title="Статистика" pathTitle="Статистика" />
            <AssideRight />
        </main>
    )
}