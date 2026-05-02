import React from "react";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Yes! You can call us at +91 98765 43210 during business hours (Mon-Sat, 9 AM - 6 PM IST).",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      'Absolutely! Mention "Demo Request" in your message and we\'ll arrange a personalized demonstration.',
  },
  {
    question: "Is live chat available 24/7?",
    answer:
      "Our live chat is available during business hours. Outside these times, please send us an email or submit a query form.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-2xl space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;