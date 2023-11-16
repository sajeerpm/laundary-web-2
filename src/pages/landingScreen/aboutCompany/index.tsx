import Logo from "@/assets/Logo.png";
import { MainAreas } from "@/data/areas";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import TextMedium from "@/shared/TextMedium";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

type Props = {};

const AboutCompany = ({}: Props) => {
  const lineHeadCap = "pb-12";
  const lineParagraphCap = "pb-6";
  const lineParagraphCapSmall = "pb-3";
  const mainAreas = MainAreas;
  return (
    <section id="about-company" className="w-full bg-black py-16 text-white">
      <div className="mx-auto flex w-5/6 flex-col items-center justify-center">
        <div>
          <img src={Logo} alt="Dry Cleaning London" />
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
        <div className={`${lineParagraphCap}`}></div>

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
          <div className={`${lineParagraphCap}`}></div>
        </motion.div>

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
            No matter where you are in London we cover all the areas in London,
            you can search us in Google with these words:
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
        </motion.div>

        {mainAreas.map((area) => (
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
            <TextMedium textAlign="text-center">{area}</TextMedium>
            <div className={`${lineParagraphCapSmall}`}></div>
          </motion.div>
        ))}
        <div className={`${lineHeadCap}`}></div>

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
          <SHText textAlign="text-center">
            <p className="text-center uppercase">MASTERDRYCLEAN LOCATIONS</p>
          </SHText>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/4`}>
            <TextMedium textAlign="text-center">
              Maida Vale dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/2`}>
            <TextMedium textAlign="text-center">
              Baker Street dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/3`}>
            <TextMedium textAlign="text-center">
              Swiss Cottage dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/3`}>
            <TextMedium textAlign="text-center">
              St John's Wood dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/1`}>
            <TextMedium textAlign="text-center">
              Barons court dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
          <Link to={`/branches/0`}>
            <TextMedium textAlign="text-center">
              Belsize Park dry cleaners
            </TextMedium>
          </Link>
          <div className={`${lineParagraphCapSmall}`}></div>
        </motion.div>
        <div className={`${lineParagraphCap}`}></div>
      </div>
      <div className="flex justify-center md:w-full">
        <AnchorLink
          className="rounded-full bg-primary-500 px-14 py-2 text-center text-white md:px-14"
          onClick={() => {}}
          href={`#${SelectedPage.Order}`}
        >
          BOOK AN ORDER
        </AnchorLink>
      </div>
    </section>
  );
};

export default AboutCompany;
