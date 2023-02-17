import { FC, ReactNode, useState } from "react";
import Aside from "./aside";
import Header from "./header";

interface LayoutProp {
  children: ReactNode;
}

const Layout: FC<LayoutProp> = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <main className="main-wrap  relative overflow-hidden min-h-screen bg-gray-100 scrollbar-hide ecommerce-dashboard-page">
        <div
          className={`wrapper mx-auto text-gray-900 font-normal grid scrollbar-hide  grid-rows-[auto,1fr] ${
            open ? "grid-cols-[257px,1fr]" : "minimize"
          }`}
        >
          <Aside open={open} setOpen={setOpen} />
          <Header />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
