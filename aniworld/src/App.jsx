import './App.css';
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
          {/*<NavBar/>*/}
          {/*<Header/>*/}

          {/*<Recommendation/>*/}
          {/*<Watch_again/>*/}
          {/*<Favorites/>*/}
          {/*<Goal/>*/}
          {/*<News/>*/}
          {/*<Rec/>*/}

          {/*<Footer/>*/}



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
