import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import SocialMediaBar from "./components/SocialMediaBar";
<<<<<<< HEAD
import AccordeonMenu from "./components/AccordeonMenu";
import Footer from "./components/Footer";
=======
import MainContent from "./components/MainContent";

>>>>>>> feature/KAN-57-Main-Content-v1
function App() {
  return (
    <>
      <ScrumNavBar />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <div className="main-content flex flex-col md:flex-row">
        <MainContent />
      </div>
      <Footer/>
=======
      <SocialMediaBar />
>>>>>>> feature/KAN-57-Main-Content-v1
    </>
  );
}

export default App;
