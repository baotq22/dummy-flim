import { BannerMain } from "./components/banner.jsx"
import { QuestionAnswer } from "./components/faq.jsx"
import { Details } from "./components/details.jsx"
import { Film } from "./components/film.jsx"
import './css/App.css'

const App = () => {
    return (
        <>
            <BannerMain />
            <Film />
            <Details />
            <QuestionAnswer />
        </>
    )
};

export default App;