import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Card from "../UI/Card";
import Pawpaw from "../assets/Pawpaw.jpg";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <Card className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto mt-4 p-4 text-center text-Marine-blue font-bold">
        <main>
          <h1>OOPS!!!</h1>
          <p>An error occured!</p>
          <img src={Pawpaw} alt="Meme" />
          <p className="my-4">Comrade, na you know wetin you de find ooo!</p>
          <Link
            to="/"
            className="w-[100%] px-4 bg-Purplish-blue text-center text-xl text-White py-2 rounded-[5px] hover:bg-Marine-blue cursor-pointer"
          >
            Go back to Home
          </Link>
        </main>
      </Card>
    </>
  );
};

export default ErrorPage;
