import Logo from "@/assets/Logo.png";
import HText from "@/shared/HText";
import TextMedium from "@/shared/TextMedium";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {};

const AboutCompany = ({}: Props) => {
  const lineHeadCap = "pb-12";
  const lineParagraphCap = "pb-6";
  return (
    <section id="about-company" className="w-full bg-black py-16 text-white">
      <div className="mx-auto flex w-5/6 flex-col items-center justify-center">
        <div>
          <img src={Logo} />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex items-center justify-center py-6">
            <HText textAlign="text-center">
              <p className="text-center uppercase">
                AWARD WINNING DRY CLEANERS IN LONDON
              </p>
            </HText>
          </div>
          <TextMedium textAlign="text-center">
            In a bustling metropolis like London, accessible and efficient dry
            cleaners are a vital part of modern life. Londoners, known for their
            fashion-consciousness and busy lifestyles, often require the
            services of dry cleaners to care for their diverse wardrobe. We are
            committed to offering competitive pricing without compromising the
            quality of our dry cleaning services.
          </TextMedium>
        </motion.div>
        <div className={`${lineHeadCap}`}></div>

        {/* EXPERT DRY CLEANERS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TextMedium textAlign="text-center">
            Dry cleaning has gained widespread popularity in London due to its
            ability to effectively clean delicate and expensive clothing. For
            professionals and individuals who cherish their delicate fabrics,
            dry cleaning is an essential service. However, the cost of dry
            cleaning can vary significantly, making it crucial to find an
            affordable yet reliable provider.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            In today's saturated dry cleaning market, locating a trustworthy,
            cost-effective, and efficient dry cleaner is essential to preserving
            your favorite garments. With numerous dry cleaning companies vying
            for attention, consumers may find it challenging to make the right
            choice. We aim to simplify this process by providing you with an
            overview of available services, pricing options, and customer
            reviews, empowering you to make an informed decision when selecting
            your dry cleaner.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>

        {/* MASTERCLEAN LOCATIONS */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TextMedium textAlign="text-center">MASTERCLEAN LOCATIONS</TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">Brighton Dry Cleaners</TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            Edinburgh Dry Cleaners
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">London Dry Cleaners</TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">New York Dry Cleaners</TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">Oxford Dry Cleaners</TextMedium>
          <div className={`${lineHeadCap}`}></div>
        </motion.div> */}
      </div>
      <div className="flex justify-center md:w-full">
        <AnchorLink
          className="rounded-full bg-secondary-500 px-14 py-2 text-center text-black md:px-14"
          onClick={() => {}}
          href={`#${SelectedPage.Home}`}
        >
          BOOK AN ORDER
        </AnchorLink>
      </div>
    </section>
  );
};

export default AboutCompany;
