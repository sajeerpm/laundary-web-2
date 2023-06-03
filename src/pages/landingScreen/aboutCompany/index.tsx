import Logo from "@/assets/Logo.png";
import HText from "@/shared/HText";
import TextMedium from "@/shared/TextMedium";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {};

const AboutCompany = ({}: Props) => {
  const lineHeadCap = "pb-20";
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
                The best Dry Cleaning delivered directly to your door
              </p>
            </HText>
          </div>
          <TextMedium textAlign="text-center">
            masterclean is a network of the very best dry cleaners.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            We provide the finest dry cleaning and laundry services, combined
            with exceptional customer service and convenient collection and
            delivery suited perfectly to your schedule.
          </TextMedium>
        </motion.div>
        <div className={`${lineHeadCap}`}></div>

        {/* DRY CLEANING DELIVERY - HOW DOES IT WORK? */}
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
            DRY CLEANING DELIVERY - HOW DOES IT WORK?
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">
            The service is simple: we collect your items, professionally clean
            or repair them, and deliver them back to your doorstep in less than
            24 hours.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            We offer flexible collection and delivery time slots, allowing us to
            work around your schedule and deliver your clothes beautifully
            washed, pressed and finished exactly when you need them.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            If you’re especially pressed for time, you can opt for same day
            laundry delivery on items collected before 10am.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
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
          <TextMedium textAlign="text-center">EXPERT DRY CLEANERS</TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">
            Founded in 2014, masterclean was the first on demand laundry service
            in London, and has since expanded its horizons to operate in cities
            across the UK, as well as in New York City.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            We work with a network of the best local dry cleaners, ensuring the
            best quality dry cleaning, repairs, alterations and more.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            Every item is treated with care and respect by our master cleaners,
            who provide world-class cleaning services time and time again.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            If you’re looking to find the best dry cleaner near you, then look
            no further than masterclean.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>

        {/* MASTERCLEAN LOCATIONS */}
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
        </motion.div>

        {/* EXPERT LAUNDRY SERVICES */}
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
            EXPERT LAUNDRY SERVICES
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">
            We have a range of premium laundry services on offer, from dry
            cleaning for your favourite suits, shirts and dresses, to expert
            tailoring and repairs on any of your garments, and everything in
            between.
          </TextMedium>
          <div className={`${lineParagraphCap}`}></div>
          <TextMedium textAlign="text-center">
            For more information, visit our services page, or reach out to our
            friendly Customer Care team with your queries.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>

        {/* LAUNDRY AND DRY CLEANING BLOG */}
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
            LAUNDRY AND DRY CLEANING BLOG
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
          <TextMedium textAlign="text-center">
            Follow our masterclean blog to stay up to date with industry and
            sustainability news and keep up with the exciting things we're doing
            as a business. You can also find plenty of tips and tricks and
            in-depth step by step guides to help you navigate all kinds laundry
            and dry cleaning on our blog.
          </TextMedium>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>

        {/* SERVICE COUNT */}
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
          <HText textAlign="text-center">
            <p className="text-center uppercase">
              ARE MY CLOTHES SAFE WITH YOUR SERVICE?
            </p>
          </HText>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>

        {/* OUR PROMISE */}
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
          <HText textAlign="text-center">
            <p className="text-center uppercase">OUR PROMISE TO YOU</p>
          </HText>
          <div className={`${lineHeadCap}`}></div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        <AnchorLink
          className="rounded-none border border-white bg-black px-28 py-2 text-center"
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
