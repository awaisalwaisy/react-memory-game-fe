import { NextUIProvider } from "@nextui-org/react";
import { Suspense } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import routes from "~react-pages";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </NextUIProvider>
  );
}

export default App;
