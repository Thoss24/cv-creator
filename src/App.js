import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CvContainer from "./components/wrapper/CvContainer";
import CvSectionsContainer from "./components/wrapper/CvSectionsContainer";
import PersonalInfo from "./components/user_input/PersonalInfo";

function App() {
  return (
    <div>
      <Header />
      <CvContainer>
        <CvSectionsContainer>
          <PersonalInfo />
        </CvSectionsContainer>
        <CvSectionsContainer></CvSectionsContainer>
      </CvContainer>
      <Footer />
    </div>
  );
}

export default App;
