import './App.css';
import { HashRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
import Header from './components/header';
import { Suspense } from 'react';
import Loader from './components/loader';
import DetailFooter from './components/detail_footer'
import Footer from './components/footer';

function App() {

  return (
    <>
      <HashRouter basename='/'>
        <Header/>
        <Suspense fallback={<Loader/>}>
          <AppRoutes/>
        </Suspense>
        <DetailFooter/>
        <Footer/> 
      </HashRouter>
    </>
  )
}

export default App
