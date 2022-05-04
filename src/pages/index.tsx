import { Main } from "../components/main";

import Head from "next/head";

import Aos from 'aos'

import 'aos/dist/aos.css'

import { useEffect } from "react";
import { Footer } from "../components/footer";



export default function Home() {

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <>

      <Head>
        <title>Nelis Santiago</title>
      </Head>

      <Main />
      <Footer />

    </>
  )

  }
