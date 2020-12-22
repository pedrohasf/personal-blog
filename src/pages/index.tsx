import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "components/Newsletter";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto lg:max-w-6xl my-12 w-full">
        <div className="prose prose-lg mx-auto">
          <h1>Who am i?</h1>
          <p>
            My name is Pedro (
            <a href="https://twitter.com/phasfernandes">@phasfernandes</a>) and
            i am a full-stack dev that in the last year bootstraped an
            brazillian SaaS called <a href="https://zape.app">Zape</a> (a tool
            to enable restaurants to create online menus and receive orders
            directly on their WhatsApp)
          </p>
          <p>
            My goal is to share all the knowledge that i have acquired being a
            SaaS founder and help devs to also start their own SaaS
          </p>
        </div>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
