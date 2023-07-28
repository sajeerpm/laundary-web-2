import HText from "@/shared/HText";
import React, { useEffect, useState } from "react";
import FAQBackgroundImage from "@/assets/images/unsplash-4.jpg";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [faqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "Can I trust you with my clothes?",
      answer:
        "Yes, you can trust us as we have been trading for more than 25 years and with that experience we do know how to take care of your clothes. Also we do work for designers like Burberry Acne studio MaxmaraOzwald boateng Ami boutique etc.",
    },
    {
      id: 2,
      question: "Where are the items cleaned?",
      answer:
        "We have our own processing unit where we clean all the garments according to the required process. We do not outsource anything like some other Dry cleaners.",
    },
    {
      id: 3,
      question: "How long does cleaning take?",
      answer:
        "The cleaning process takes 24 to 48 hours depending on the garments. Please call us now if you require a same day service.",
    },
    {
      id: 4,
      question: "Can you clean any kind of items?",
      answer:
        "Having our 25 years' experience we are confident to clean any kind of garments.",
    },
    {
      id: 5,
      question: "What is the minimum order charge?",
      answer:
        "The minimum order charge is £30 with free collection and delivery.",
    },
    // Add more FAQ items as needed
  ]);

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (itemId: number) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="items-center justify-center md:flex"
      style={{
        backgroundImage: `url(${FAQBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto mt-20 w-5/6">
        <div className="w-full py-20">
          <HText textAlign="text-center">FREQUENTLY ASKED QUESTIONS</HText>
        </div>
        <div className="h-[100vh] py-8 md:px-4">
          <div className="mx-auto max-w-5xl">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="mb-3 overflow-hidden rounded-lg bg-white shadow-lg"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex cursor-pointer items-center justify-between px-6 py-4">
                  <h2 className="text-lg text-gray-800">{item.question}</h2>
                  <span className="transform text-xl transition-transform">
                    {expandedItem === item.id ? "−" : "+"}
                  </span>
                </div>
                {expandedItem === item.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
