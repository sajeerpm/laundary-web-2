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
            Dry Cleaners In London are an important part of modern life. Because
            in a city like London, residents are always on the go and busy.
            People are more fashion conscious and like to wear a variety of
            clothes. We always believe that quality Dry cleaners in London
            should be accessible to everyone. That’s why we offer competitive
            pricing options without compromising the standard of our services.
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
          <TextMedium textAlign="text-center uppercase">
            Find the most affordable and efficient dry cleaners in London.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">
            Dry cleaning in london has become mainstream in modern society due
            to its efficiency and effectiveness in cleaning delicate and
            expensive clothes. Dry cleaning in London is an essential service
            for professional individuals who want to take care of delicate
            fabrics. However, the cost of dry cleaning can be beyond the reach
            of some. And there can be great variation in efficiency between
            providers.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            Finding a reliable, affordable and efficient dry cleaner is critical
            to keeping your favorite clothes in top condition. With multiple dry
            cleaning companies flooding the industry, many consumers find it
            increasingly difficult to find an affordable and efficient dry
            cleaning service. We will provide you with an overview of the
            different services available, pricing and customer reviews so that
            you can make an informed decision when selecting your dry cleaner.
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
