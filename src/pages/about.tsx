import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="page">
      Tell me about your self...
      <Link to={"/"}>
        <Button color="secondary">Home</Button>
      </Link>
    </main>
  );
};

export default About;
