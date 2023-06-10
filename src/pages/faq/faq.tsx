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
      question: "What is the futuristic design?",
      answer:
        "The futuristic design is a modern and innovative approach that incorporates sleek and minimalist elements, bold typography, vibrant colors, and geometric shapes.",
    },
    {
      id: 2,
      question: "How can I create a futuristic design?",
      answer:
        "To create a futuristic design, you can use clean and minimalistic layouts, bold and futuristic fonts, vibrant color schemes, and incorporate geometric shapes and patterns.",
    },
    {
      id: 3,
      question: "How can I create a futuristic design?",
      answer:
        "To create a futuristic design, you can use clean and minimalistic layouts, bold and futuristic fonts, vibrant color schemes, and incorporate geometric shapes and patterns.",
    },
    {
      id: 4,
      question: "How can I create a futuristic design?",
      answer:
        "To create a futuristic design, you can use clean and minimalistic layouts, bold and futuristic fonts, vibrant color schemes, and incorporate geometric shapes and patterns.",
    },
    {
      id: 5,
      question: "How can I create a futuristic design?",
      answer:
        "To create a futuristic design, you can use clean and minimalistic layouts, bold and futuristic fonts, vibrant color schemes, and incorporate geometric shapes and patterns.",
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
          <HText textAlign="text-center">FEQUENTLY ASKED QUESTIONS</HText>
        </div>
        <div className="h-full px-4 py-8">
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
