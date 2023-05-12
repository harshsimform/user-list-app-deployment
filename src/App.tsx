import MainComponent from "./components/MainComponent";

const environment = import.meta.env;

const App = (): JSX.Element => {
  return (
    <>
      <p className="flex justify-center text-4xl text-indigo-500 my-5">
        {environment.VITE_APP_PROJECT_ENV}
      </p>
      <MainComponent />
    </>
  );
};

export default App;
