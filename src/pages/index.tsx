import { HeyDev } from "@/components";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="page">
      <Link to="/about">
        <Button color="primary">About</Button>
      </Link>
      <HeyDev />
    </main>
  );
};

export default Home;
