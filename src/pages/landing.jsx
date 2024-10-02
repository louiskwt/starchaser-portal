import {Hero, Navbar, NoteSection, Spinner} from "../components";
import {useAuth} from "../hooks";

export const LandingPage = () => {
  const {user, loading} = useAuth();
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      {user ? <NoteSection /> : <Hero />}
    </>
  );
};
