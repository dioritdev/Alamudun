import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function Chapter() {
    return (
        <main className="bg-milk_gray py-[20px] flex justify-center gap-[20px] relative">
            <LinksNo title="Глава" pathTitle="Глава" />
            <AssideRight />
        </main>
    )
}
