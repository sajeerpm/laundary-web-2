import Logo from "@/assets/logo-white.png";
// import { MainAreas } from "@/data/areas";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import TextMedium from "@/shared/TextMedium";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

type Props = {
  aboutArea: string;
  areaName: string;
};

const AboutCompany = ({ aboutArea, areaName }: Props) => {
  // const lineHeadCap = "pb-12";
  const lineParagraphCap = "pb-6";
  const lineParagraphCapSmall = "pb-3";
  // const mainAreas = MainAreas;
  // const [expanded, setExpanded] = useState(false);

  // async function delay(ms: number): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, ms);
  //   });
  // }
  // const toggleExpanded = async () => {
  //   await delay(1000);
  //   setExpanded(!expanded);
  // };
  // const displayAreaLimit = expanded ? mainAreas : mainAreas.slice(0, 3);
  return (
    <section id="about-company" className="w-full bg-black py-8 text-white">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="Dry Cleaning London" />
      </div>
      {!aboutArea && (
        <div className="mx-auto flex w-5/6 flex-col items-center justify-center">
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
                  ECO-FRIENDLY AWARD WINNING DRY CLEANERS IN LONDON
                </p>
              </HText>
            </div>
            <TextMedium textAlign="text-center">
              We believe that in a busy metropolis like London, experienced and
              reliable Dry Cleaners are a vital part of modern life. Londoners,
              known for their fashion-consciousness and busy lifestyles, often
              require the services of Dry Cleaners to care for their diverse
              wardrobe. We are committed to offering competitive pricing without
              compromising the quality of our Dry cleaning and Laundry Services.{" "}
              <Link className="text-blue-500 underline" to={`/pricing`}>
                Please See Our Prices
              </Link>
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Dry cleaning has gained widespread popularity in London due to its
              ability to effectively clean delicate and expensive clothing. Dry
              cleaning is an essential service for the people who love their
              delicate clothes.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              In today's saturated dry cleaning market, locating a trustworthy,
              cost-effective and efficient dry cleaner is essential to
              preserving your favourite garments. With numerous dry cleaning
              companies vying for attention, consumers may find it challenging
              to make the right choice.
            </TextMedium>
          </motion.div>
          <div className={`${lineParagraphCap}`}></div>
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
              Master Dry Cleaners have simplified this process by providing you
              with the overview of our services, Competitive pricing options and
              customer reviews to empowering you to make a best decision while
              selecting your dry cleaner.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Master Dry Cleaners have established our name among London's
              award-winning dry cleaners and Laundry service providers, having a
              steady dedication to provide best quality service. We prioritise
              your convenience above all else, and we pride ourselves being
              capable to clean any garment, no matter how delicate they are.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Our broad spectrum of services ranges from comprehensive cleaning
              of day-to-day outfits, elegant evening Dresses, Wedding and office
              wear Suits, exquisite bridal/wedding dresses to tricky material
              such as silk, leather, cashmere and Suede. In addition, our
              top-notch ironing, Tailoring and alteration , Trainers cleaning ,
              Carpets and Sofas cleaning and Curtains cleaning services are much
              appreciated by our loyal customers.
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
              Apart from our excellent quality Dry cleaning services, we place
              immense importance on sustainability and are committed to using
              environmentally friendly products and procedures in all our
              operations.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Through our competitive pricing options, we strive to deliver
              affordable, first-rate dry cleaning services to all our customers
              in London covering all the areas like Mayfair , Kensington ,
              Chelsea , Soho, Bloomsbury, Knightsbridge, Fulham, Park Lane, Bond
              street, Oxford Street and Regent Street.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Please visit this{" "}
              <Link className="text-blue-500 underline" to={`/areas`}>
                link
              </Link>{" "}
              to areas page to see our availability in your areas
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Experience the best Dry cleaning and Laundry service at Master Dry
              Cleaners - because your clothing deserves the best. Trust us,
              we're the Masters! So, what are you waiting for? Schedule your
              free pickup and delivery today, sit back, relax and allow us to
              transform your precious clothing. With Master Dry Cleaners, it's
              not just dry cleaning - it's preserving the integrity of your
              wardrobe with uncompromising quality.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              The rave reviews from our clientele bear testimony to the
              unbeatable standards of quality we uphold and the cost-effective
              solutions we offer
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
            <TextMedium textAlign="text-center">
              Master Dry Cleaners, saving you time and delivering results, all
              in one place.
            </TextMedium>
            <div className={`${lineParagraphCap}`}></div>
          </motion.div>

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
            <Link to={`https://g.page/r/CVnKAIe9xWFzEBM/`}>
              <TextMedium textAlign="text-center">
                Maida Vale dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
            <Link to={`https://g.page/r/CcCH9s0PyRmKEBM/`}>
              <TextMedium textAlign="text-center">
                Baker Street dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
            <Link to={`https://g.page/r/CcNILOX_eAv3EBM/`}>
              <TextMedium textAlign="text-center">
                Swiss Cottage dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
            <Link to={`https://g.page/r/CcNILOX_eAv3EBM/`}>
              <TextMedium textAlign="text-center">
                St John's Wood dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
            <Link to={`https://g.page/r/CdAr-IwoSe-eEBM/`}>
              <TextMedium textAlign="text-center">
                Barons court dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
            <Link to={`https://g.page/r/CannzPRZtw3cEBM/`}>
              <TextMedium textAlign="text-center">
                Belsize Park dry cleaners
              </TextMedium>
            </Link>
            <div className={`${lineParagraphCapSmall}`}></div>
          </motion.div>
          <div className={`${lineParagraphCap}`}></div>
        </div>
      )}
      {aboutArea && (
        <>
          <div className="flex items-center justify-center py-6">
            <HText textAlign="text-center">
              <p className="text-center uppercase">{areaName}</p>
            </HText>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: aboutArea.trim() ?? "",
            }}
          />
        </>
      )}
      <div className="flex justify-center py-8 md:w-full">
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
