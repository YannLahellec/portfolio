import Title from "../components/Title/Title";
import Description from "../components/Description/Description";
import Projets from "../components/Projets/Projects";
import Competences from "../components/Competences/Competences";
import Hobbies from "../components/Hobbies/Hobbies";
import ContactForm from "../components/ContactForm/ContactForm";

function HomePage() {
  return (
    <>
      <Title />
      <Description />
      <Projets />
      <Competences />
      <Hobbies />
      <ContactForm />
    </>
  );
}

export default HomePage;
