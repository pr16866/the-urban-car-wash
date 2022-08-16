// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import { AppWrapper } from "../Components/ContextApi/index";


function MyApp({ Component, pageProps }) {

 

  return (
    <>
      <Head>
        <title>The Urban Car Wash</title>
        <meta name="description" content="The Urban Car Wash" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <div className="allComponent" >
        <AppWrapper>

        <Component {...pageProps} />
        </AppWrapper>
      </div>
    </>
  );
}

export default MyApp;
