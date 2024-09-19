import { React, lazy, Suspense } from "react";
const AboutClients = lazy(() =>
  import("../components/AboutComponents/AboutClients")
);
const AboutGallery = lazy(() =>
  import("../components/AboutComponents/AboutGallery")
);
const AboutOfficers = lazy(() =>
  import("../components/AboutComponents/AboutOfficers")
);
const AboutStory = lazy(() =>
  import("../components/AboutComponents/AboutStory")
);
const AboutTeam = lazy(() => import("../components/AboutComponents/AboutTeam"));
const AboutVision = lazy(() =>
  import("../components/AboutComponents/AboutVision")
);
const FaqConponent = lazy(() => import("../components/FAQs/FaqConponent"));
const NewsLetter = lazy(() =>
  import("../components/NewsLetter.jsx/NewsLetter")
);
import "../styles/About.css";
import Loading from "../components/AboutComponents/Loading";
function AboutPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AboutStory />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutVision />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutClients />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutTeam />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutOfficers />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutGallery />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FaqConponent />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <NewsLetter />
      </Suspense>
    </div>
  );
}

export default AboutPage;
