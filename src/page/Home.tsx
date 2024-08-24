import CenterAsside from "../components/CenterAsside";
import Front from "../components/Front";
import LeftAsside from "../components/LeftAsside";
import RightAsside from "../components/RightAsside";

export default function Home() {
    return (
        <main className="bg-milk_gray">
            <Front />
            <div className="px-4 flex gap-[20px] justify-between">
                <LeftAsside />
                <CenterAsside />
                <RightAsside />
            </div>
        </main>
    )
}
