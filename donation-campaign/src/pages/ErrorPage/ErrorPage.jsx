import Nav from "../../components/Nav/Nav";

const ErrorPage = () => {
  return (
    <>
      <header><Nav></Nav></header>
      <main className="myContainer flex justify-center items-center h-screen -mt-36 text-4xl font-bold capitalize">this is 404 page</main>
      <footer></footer>
    </>
  );
};

export default ErrorPage;
