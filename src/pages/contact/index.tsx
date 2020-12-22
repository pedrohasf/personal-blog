import BlogFooter from "components/Footer";
import BlogHeader from "components/Header";
import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BlogHeader />
      <div className="prose prose-xl mx-auto text-center mt-8 flex flex-col mb-48 md:mb-32 pb-5">
        <h1>Contact</h1>
        <p>Send an email to pedrohasftb@gmail.com</p>
        <p>
          Or send me a DM on{" "}
          <a href="https://twitter.com/phasfernandes">Twitter</a>
        </p>
      </div>
      <BlogFooter />
    </div>
  );
};

export default Contato;
