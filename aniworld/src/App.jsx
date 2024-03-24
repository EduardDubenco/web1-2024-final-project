import './App.css';
import Footer from "./Components/Layout-Components/Footer";
import NavBar from "./Components/Layout-Components/NavBar";
import MainPage from "./Components/Pages/MainPage";
import {createTheme} from "@mui/material/styles";
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

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

          <Footer/>
      </>
  );
}

export default App;
