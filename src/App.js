import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CvContainer from "./components/wrapper/CvContainer";
import CvSectionsContainer from "./components/wrapper/CvSectionsContainer";
import PersonalInfo from "./components/user_input/PersonalInfo";
import CvProvider from "./components/store/CvProvider";
import Cv from "./components/cv_areas/Cv";

function App() {
  return (
    <div>
      <Header />
      <CvProvider>
      <CvContainer>
        <CvSectionsContainer>
          <PersonalInfo />
        </CvSectionsContainer>
        <CvSectionsContainer>
          <Cv />
        </CvSectionsContainer>
      </CvContainer>
      </CvProvider>
      <Footer />
    </div>
  );
}

export default App;
