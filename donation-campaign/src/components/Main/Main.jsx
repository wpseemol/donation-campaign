
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <main className="container 2xl:container xl:container lg:container md:container sm:container  mx-auto">
        <Outlet></Outlet>
      </main>
    );
};

export default Main;