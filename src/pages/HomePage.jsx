import React, { lazy, Suspense } from "react";
import "../styles/HomePage.css";
import Loading from "../components/AboutComponents/Loading";

// Lazy load components
const CalendarComponent = lazy(() =>
  import("../components/HomeComponents/CalendarCoponent")
);
const AboutComponent = lazy(() =>
  import("../components/HomeComponents/AboutComponent")
);
const HomeServices = lazy(() =>
  import("../components/HomeComponents/HomeServices")
);
const HomePride = lazy(() => import("../components/HomeComponents/HomePride"));
const HomePartners = lazy(() =>
  import("../components/HomeComponents/HomePartners")
);
const HomeTestimonials = lazy(() =>
  import("../components/HomeComponents/HomeTestimonials")
);
const NewsLetter = lazy(() =>
  import("../components/NewsLetter.jsx/NewsLetter")
);
const HomeHero = lazy(() => import("../components/HomeComponents/HomeHero"));

function HomePage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <HomeHero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CalendarComponent />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutComponent />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeServices />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomePride />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomePartners />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HomeTestimonials />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default HomePage;
