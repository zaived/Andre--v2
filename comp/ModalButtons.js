import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "../public/assets/icons/cart.gif";
import Phone from "../public/assets/icons/phone.gif";
import Guy from "../public/assets/icons/guy.gif";

import AboutModal from "./Modals/AboutModal";
import ContactModal from "./Modals/ContactModal";
import { motion, AnimatePresence } from "framer-motion";

const ModalButtons = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  var [currentModalId, setCurrentModalId] = useState(null);

  var content = [
    {
      id: "contact",
      modalContent: <ContactModal />,
    },
  ];

  {
    content.map((contentItem) => {
      const { id, modalContent } = contentItem;

      return (
        <div
          key={id}
          onClick={() => {
            setCurrentModalId(id);
            open();
          }}
        ></div>
      );
    });
  }

  function modal() {
    if (modalOpen) {
      console.log("modal is open");
      if (currentModalId === "about") {
        console.log("currentModalId is about");
        return <AboutModal handleClose={() => close()} />;
      } else if (currentModalId === "contact") {
        return <ContactModal handleClose={() => close()} />;
      } else {
        console.log("no id defined", currentModalId);
        return null;
      }
    }

    return null;
  }

  return (
    <div className="m-container">
      <motion.div className="item">
        <Link href="/About">
          <a>
            <Image src={Guy} alt="GuySign" width={200} height={200} />
            <h3>ABOUT</h3>
          </a>
        </Link>
      </motion.div>

      {/* <div className="item">
        <Link href="/ArtisticExpression">
          <a>
            <Image src={Hands} alt="GuySign" width={200} height={200} />
            <h3>EXPRESSION</h3>
          </a>
        </Link>
      </div> */}
      {/* <div className="item">
        <Link href="/AdvertisingCampaigns">
          <a>
            <Image src={Brain} alt="GuySign" width={200} height={200} />
            <h3>ADVERTISING</h3>
          </a>
        </Link>
      </div> */}

      {/* <div className="item">
        <Link href="/Diversity">
          <a>
            <Image src={Heart} alt="GuySign" width={200} height={200} />
            <h3>DIVERSITY</h3>
          </a>
        </Link>
      </div> */}

      <div className="item">
        <Link href="/Shop">
          <a>
            <Image src={Cart} alt="GuySign" width={200} height={200} />
          </a>
        </Link>
        <h3>SHOP</h3>
      </div>

      <div
        className="item"
        onClick={() => {
          setCurrentModalId("contact");
          open();
        }}
      >
        <Image src={Phone} alt="GuySign" width={200} height={200} />
        <h3>CONTACT</h3>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modal()}
      </AnimatePresence>
    </div>
  );
};

export default ModalButtons;
