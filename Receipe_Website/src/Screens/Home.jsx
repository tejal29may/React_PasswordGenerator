import React from "react";
import Nav from "../Components/Nav";
// import Category from '../Components/Category'

import { lazy, Suspense } from "react";
const Category = React.lazy(() => import("../Components/Category"));

function Home() {
  return (
    <>
      {/* <Auth/> */}

      <Nav />
      <Suspense fallback={<div>Loading.......</div>}>
        <Category/>
      </Suspense>
    </>
  );
}

export default Home;
