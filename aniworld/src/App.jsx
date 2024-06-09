import './App.css';
import Footer from "./Components/Layout-Components/Footer";
import NavBar from "./Components/Layout-Components/NavBar";
import MainPage from "./Components/Pages/MainPage";
import {createTheme} from "@mui/material/styles";
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Recommendation from "./Components/Main-Components/Recommendation";
import Watch_again from "./Components/Main-Components/Watch_again";
import Favorites from "./Components/Main-Components/Favorites";
import Goal from "./Components/Main-Components/Goal";
import News from "./Components/Main-Components/News";
import Rec from "./Components/Main-Components/Rec";

export const CustomButton = styled(Button)`
    background-color: #F47521;
        &:hover {
            background-color: #f3985b
     }
`;

export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',

    },

});

function App() {
  return (
      <>
          <NavBar/>
          <MainPage/>

          <Recommendation/>
          <Watch_again/>
          <Favorites/>
          <Goal/>
          <News/>
          <Rec/>

          <Footer/>



          {/*<BrowserRouter>*/}
          {/*    <Routes>*/}
          {/*        <Route path="/" element={<Layout />}>*/}
          {/*            <Route index element={<Home />} />*/}
          {/*            <Route path="blogs" element={<Blogs />} />*/}
          {/*            <Route path="contact" element={<Contact />} />*/}
          {/*            <Route path="*" element={<NoPage />} />*/}
          {/*        </Route>*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}



      </>
  );
}

export default App;
