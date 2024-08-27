
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Administration from "../page/Administration"
import Ao from "../page/Ao"
import Chapter from "../page/Chapter"
import Documenty from "../page/Documenty"
import Home from "../page/Home"
import Kontakts from "../page/Kontakts"
import Layout from "../page/Layout"
import LiveInVilage from "../page/LiveInVilage"
import News from "../page/News"
import Online from "../page/Online"
import Res2016 from "../page/Res2016"
import Res2017 from "../page/Res2017"
import Res2018 from "../page/Res2018"
import Res2019 from "../page/Res2019"
import Resultation from "../page/Resultation"
import SotsRosvitia from "../page/SotsRosvitia"
import Statistica from "../page/Statistica"

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="alamudunskij-ao" element={<Ao />} />
                    <Route path="administratsiya" element={<Administration />} />
                    <Route path="postanovleniya" element={<Resultation />} />
                    <Route path="dokumenty" element={<Documenty />} />
                    <Route path="onlajn-obrashhenie" element={<Online />} />
                    <Route path="kontakty" element={<Kontakts />} />
                    <Route path="news/page/:id" element={<News />} />

                    <Route path="postanovleniya-2019" element={<Res2019 />} />
                    <Route path="postanovleniya-2018" element={<Res2018 />} />
                    <Route path="postanovleniya-2016" element={<Res2016 />} />
                    <Route path="postanovleniya-2017" element={<Res2017 />} />

                    <Route path="statistika" element={<Statistica />} />
                    <Route path="sotsialnoe-razvitie" element={<SotsRosvitia />} />
                    <Route path="zhizn-sela" element={<LiveInVilage />} />
                    <Route path="chapter" element={<Chapter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
