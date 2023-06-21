import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CvContainer from "./components/wrapper/CvContainer";
import CvSectionsContainer from "./components/wrapper/CvSectionsContainer";
import UserDetails from "./components/user_input/UserDetails";

function App() {
  return (
    <div>
      <Header />
      <CvContainer>
        <CvSectionsContainer>
          <UserDetails />
        </CvSectionsContainer>
        <CvSectionsContainer></CvSectionsContainer>
      </CvContainer>
      <Footer />
    </div>
  );
}

export default App;
