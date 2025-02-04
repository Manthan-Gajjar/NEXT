import Image from "next/image";
import Link from "next/link";
import Header from "./common/header";
import CardList from "./common/card";
import Footer from "./common/footer";


export default function Home() {
  return ( <>
  <Header/>
<CardList/>
<Footer/>
  </>
  );
}
