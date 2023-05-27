import { Outlet } from "react-router";

import Navigation from "../components/Navigation";
import Card from "../UI/Card";

const RootLayout = () => {
  return (
    <>
      {/* <Card> */}
        <Navigation />
        <main>
          <Outlet />
        </main>
      {/* </Card> */}
    </>
  );
};

export default RootLayout;
