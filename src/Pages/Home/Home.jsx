import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ShowProducts from "../../Components/ShowProducts";
import AboutCompo from "../../Components/about/AboutCompo";
import Banner from "./Banner";

const Home = () => {
    const sunglasses = useLoaderData();
    return (
        <>
        <Helmet>
            <title>Glasses | Home </title>
        </Helmet>
            <Banner />
            <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProducts name={'Best sellers'} sunglasses={sunglasses.slice(0, 5)} />
            <div>
            <AboutCompo />
            </div>
        </>
    );
};

export default Home;