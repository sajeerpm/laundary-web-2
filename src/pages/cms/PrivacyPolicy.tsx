import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import { useEffect } from "react";

type Props = {};

const PrivacyPolicy = ({}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
      <div className="w-full py-8">
        <HText textAlign="text-center uppercase">Privacy Policy</HText>
      </div>
      <div className="mx-auto flex w-4/6 flex-col">
        <p className="mb-8">
          Masterclean drycleaners Limited (we) are committed to protecting and
          respecting your privacy.
          <br />
          This policy with our Terms and Conditions and any other documents
          referred to on it sets out the basis on which any personal data we
          collect from you, or that you provide to us, will be processed by us.
          Please read the following carefully to understand our views and
          practices regarding your personal data and how we will treat it. By
          visiting masterdrycleaner.co.uk you are accepting and consenting to
          the practices described in this policy.
          <br />
          <br /> For the purpose of the Data Protection Act 1998. The data
          controller is Masterclean drycleaners limited of 6 Langtry walk London
          NW8 0DU.
        </p>
        <SHText textAlign="">Information we may collect from you</SHText>

        <p className="mb-8">
          We may collect and process the following data from you.
          <br /> Information you give us. You may give us information about you
          by filling in forms on our website masterdrycleaner.co.uk or by
          corresponding with us by phone, email or otherwise. The information
          you give us may include your name, address, email address or phone
          number.
          <br /> Information we collect about you. With regard to each of your
          visits to our site we may automatically collect the following
          information.
          <br /> Technical information, including the internet protocol
          (IP)address used to connect your computer to the internet, your login
          information , browser type and version, time zone setting, browser
          plug-in types and versions, operating system and platform.
          <br /> Information about your visit, including the full Uniform
          Resource Locators (URL) clickstream to, through and from our site
          (including date and time), products you viewed or searched for, page
          response times, download errors, length of visits to certain pages,
          page interaction information (such as scrolling clicks and mouse
          overs), and method used to browse away from the page and any phone
          number used to call our customer service number.
        </p>

        <SHText textAlign="">cookies</SHText>

        <p className="mb-8">
          Our website uses cookies to distinguish you form other users of our
          website. This helps us to provide you with a good experience when you
          browse our website and also allows us to improve our site.
          <br /> We use Google Analytics software to collect information about
          how you use masterdrycleaner.co.uk. We do this to help make sure the
          site is meeting the needs its users and to help us make improvements.
          <br /> Cookies allow us to keep track of items stored in shopping
          basket, your pick up, delivery , date and times and address locations.
        </p>

        <SHText textAlign="">Credit/Debit Card Data</SHText>

        <p className="mb-8">
          We do not store any Credit or Debit card data including card numbers,
          cvc and billing addresses. We send all Credit and Debit card
          information securely to online.worldpay.com for processing.
          <br /> Please see online.worldpay.com terms of service for more
          information about their payment system and security .
        </p>

        <SHText textAlign="">Where We Store Your Personal Data</SHText>

        <p className="mb-8">
          We store your data on secure servers in Europe.
          <br /> By submitting your data you agree to do this.
          <br /> We will not share your data with any third party for marketing,
          market research or commercial purpose.
          <br /> Where we have given you or you have chosen a password which
          enables you to access certain parts of our site, you are responsible
          to keep this password confidential. We ask you not to share this
          password with anyone.
          <br /> Unfortunately the transfer of information via the internet is
          not completely secure. Although we will do our best to protect
          personal data, we cannot guarantee the security of your data
          transmitted to our site , any transmission is at your own risk. Once
          we have received your information we will use strict procedures and
          security features to try and prevent unauthorised access.
          <br /> Our site from time to time may contain links to and from the
          websites of our partner networks, advertisers and affiliates. If you
          follow a link to any of these websites please note that these websites
          have their own privacy policies and that we do not accept any
          responsibility or liability for these policies. Please check their
          policies before submitting any personal data on these websites.
        </p>

        <SHText textAlign="">Access To Information</SHText>

        <p className="mb-8">
          The act gives you the right to access information held about you. Your
          right of access can be exercised in accordance with the act. Any
          access request may be subject to a fee of £10 to meet our cost of
          providing you with details of the information we held about you.
        </p>

        <SHText textAlign="">Changes To Our Privacy Policy</SHText>

        <p className="mb-8">
          Any changes we make to our privacy policy will be posted on this page
          and where appropriate notified to you by email. Please check back
          frequently to see any updates or changes to our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
