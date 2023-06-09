import { Outlet } from "react-router";

import Navigation from "../components/Navigation";
import Card from "../UI/Card";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
