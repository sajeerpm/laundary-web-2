import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

type Props = {};

const TermsAndConditions = ({}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
      <Helmet>
        <title>Top Dry Cleaners in London | Master Dry Clean</title>
        <meta
          name="description"
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        />
        <meta
          property="og:title"
          content="Meta title: Top Dry Cleaners in London | Master Dry Clean"
        ></meta>
        <meta
          property="og:description"
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        ></meta>
      </Helmet>
      <div className="w-full py-8">
        <HText textAlign="text-center uppercase">Terms and Conditions</HText>
      </div>
      <div className="mx-auto flex w-11/12 flex-col md:w-4/6">
        <p>
          When you visit mastrdrycleaner.co.uk you are subject to our website
          terms and conditions. We recommend you read these and also our privacy
          policy before placing any order or submitting any personal data or
          making any transaction.
          <br />
          <br />
        </p>
        <SHText textAlign="">1. PLACING AND ORDER</SHText>
        <ul className="mb-8 pl-6">
          <li>
            1.1 Please ensure that you check the details of the order before
            submitting as we will not be liable to you if you make any errors.
            If you think you have made any errors please contact us 02073285621
            we will advice you of any changes to your order by email or
            telephone.
          </li>
          <li>
            1.2 We will assign a order number to every order and inform you of
            it when we accept the order Please quote this order number when you
            contact us.
          </li>
        </ul>
        <SHText textAlign="">2. AMENDING/CANCELING YOUR ORDER</SHText>
        <ul className="mb-8 pl-6">
          <li>
            2.1 You may cancel /amend your order up to 2 hours before the
            collection time mentioned in your acceptance email sent by us.
          </li>
          <li>
            2.2 After we have collected your item(s) if you or we our effected
            by a event outside our control, a cancelation may be actioned by
            contacting us.
          </li>
          <li>
            2.3 Once item has been collected from you we have begun to provide
            service to you and that any rights of cancellation you may have
            under consumer cancellation regulation may be lost .
          </li>
          <li>
            2.4 We may cancel your order and the contract between us in the
            following circumstances. If you make the items unavailable for
            collection, if we consider any item that does not correspond with
            the order, is damaged, has no information about its content, has no
            cleaning instructions or does not fall within the category of items
            we accept.
          </li>
        </ul>
        <SHText textAlign="">3. COLLECTION AND DELIVERY</SHText>
        <ul className="mb-8 pl-6">
          <li>
            3.1 We will use reasonable endeavour to collect and deliver items at
            the time specified in the order, but we cannot guarantee to do so,
            we will use reasonable endeavour to contact you by phone or email.
          </li>
          <li>
            3.2 If you are not available to accept delivery of items we will
            contact you by phone or email to arrange delivery at a time which is
            convenient to you.
          </li>
          <li>
            3.3 We are not obliged to attempt delivery more than once, if you
            are not available to accept delivery second time we will return the
            items back to our processing facility and will inform you via phone
            email or text. Subsequent delivery will be your expense.
          </li>
          <li>
            3.4 If you have failed to accept or arrange delivery of an item for
            more than 90 days after the delivery date specified in the order we
            may dispose of items or donate it to approved charities.
          </li>
          <li>
            3.5 You may arrange to have items collected from or delivered via
            third party, on condition that you do so at your own risk and the
            third party is prepared to sign and acknowledgement on your behalf.
          </li>
        </ul>
        <SHText textAlign="">4. PRICE AND PAYMENT</SHText>
        <ul className="mb-8 pl-6">
          <li>
            4.1 The price of our services is set out under price list on our
            website and will be the price in force at the time you place your
            order. Our prices may change any time but that will not effect on
            the orders which have been accepted as per the old prices.
          </li>
          <li>
            4.2 Our prices include vat however if it changes between the time
            you place and order and the time of payment we will adjust your rate
            of vat.
          </li>
        </ul>
        <SHText textAlign="">5. RECLEANING POLICY</SHText>
        <ul className="mb-8 pl-6">
          <li>
            5.1 The re-cleaning policy applies to individual items originally
            cleaned by masterclean drycleaners limited and the original cleaning
            ticket must be attached .
          </li>
          <li>
            5.2 Please note it is not always possible to remove stains. If we
            cannot remove a stain customer will be informed accordingly in this
            case we are not able to offer complimentary re-clean .
          </li>
        </ul>
        <SHText textAlign="">6. OUR LIABILITY TO YOU</SHText>
        <ul className="mb-8 pl-6">
          <li>
            6.1 In the unlikely event of loss or damage to an item, Masterclean
            will pay compensation in line with the Fair Compensation Guidelines
            as provided by the Textile Services Association .
          </li>
          <li>
            6.2 The Textile Services Guidelines indicate that fair and
            reasonable compensation be paid on the basis of allowing for wear
            and tear and the age of the item. It is considered reasonable for us
            to ask for proof of purchase confirming the purchase price prior to
            agreeing any compensation. Failure to produce a valid proof of
            purchase may limit the compensation amount offered.
          </li>
          <li>
            6.3 We will not be responsible for any loss or damage (including
            without limitation) any colour loss, shrinkage or other damage
            resulting from the following .
            <ul className="pl-6">
              <li>
                6.3.1 Failure to notify us of any special requirements or
                instructions for cleaning the item.
              </li>
              <li>
                6.3.2 The fact that the item has no label indicating clearing
                instructions.
              </li>
              <li>
                6.3.3 Any existing damage to the item at the time of collection.
              </li>
              <li>
                6.3.4 Any extraneous object left in the item, including but not
                limited to coins, buttons, jewellery, cufflinks, collar
                stiffeners, pens or tie clip.
              </li>
              <li>
                6.3.5 In the event we issue compensation for damage cause to
                item(s) in our care be it monetary or replacement. masterclean
                reserves the right to to retain permeate ownership of damaged
                item(s).
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
