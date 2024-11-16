import { useParams } from "react-router-dom";
import Menu from "../component/Menu";


const AboutPage = () => {
    let {id,name} = useParams();

    return (
        <div>
            <Menu/>
            <h1>This is AboutPage</h1>
            <p>ID : {id}</p>
            <p>Name : {name}</p>
        </div>
    );
};

export default AboutPage;