import { Footer, Header, ScrollToTopButton } from "components";
import PropTypes from "prop-types";
import MyChatBot from "../../appAdicionales/ChatBot/MyChatBot";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[100px] sm:mt-[0px] xl:mt-[100px]">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <MyChatBot />
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
