import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CvContainer from "./components/wrapper/CvContainer";
import CvSectionsContainer from "./components/wrapper/CvSectionsContainer";
import PersonalInfo from "./components/user_input/PersonalInfo";
import Experience from "./components/user_input/Experience";
import CvProvider from "./components/store/CvProvider";
import Cv from "./components/cv_areas/Cv";
import React, { Fragment } from "react";

// refactor so that personal info, experience

function App() {
  return (
    <Fragment>
      <Header />
      <CvProvider>
      <CvContainer>
        <CvSectionsContainer>
          <PersonalInfo />
          <Experience />
        </CvSectionsContainer>
        <CvSectionsContainer>
          <Cv />
        </CvSectionsContainer>
      </CvContainer>
      </CvProvider>
      <Footer />
    </Fragment>
  );
}

export default App;
