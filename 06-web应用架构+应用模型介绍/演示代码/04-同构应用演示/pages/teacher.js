import NavBar from "../components/navBar";
import axios from "axios";

export default function Teacher(props) {
    return (
        <>
            <div>
                <NavBar nav_data={props.nav.data}/>
                <div className="page">
                    这是讲师页面内容 {props.random}
                </div>
            </div>
            <style jsx>{`
                .page {
                  font-size: 30px;
                  color: tomato;
                  font-weight: bold;
                  text-align: center;
                }
            `}</style>
        </>
    )
}
export const getServerSideProps = async () => {
    let {data} = await axios.get("http://localhost:3000/api/nav")
    return {
        props: {nav: data, random: Math.random()}
    }
}