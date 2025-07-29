import React, { useState, useEffect, useRef } from "react";
import faq from "../../api/faq.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const AccordionItem = ({ item, openId, toggleAccordion }) => (
  <ul className="w-full p-4 mx-4 bg-white dark:bg-zinc-900 rounded-md shadow-sm border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
    <li className="font-semibold flex justify-between items-center text-black dark:text-white">
      {item.question}
      <button onClick={() => toggleAccordion(item.id)}>
        {openId === item.id ? (
          <MdKeyboardArrowUp size={24} />
        ) : (
          <MdKeyboardArrowDown size={24} />
        )}
      </button>
    </li>
    {openId === item.id && (
      <li className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.answer}</li>
    )}
  </ul>
);

const Faq = () => {
  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [activeSection, setActiveSection] = useState("Placing an Order");

  const placingRef = useRef(null);
  const shippingRef = useRef(null);
  const returnsRef = useRef(null);
  const supportRef = useRef(null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    setData(faq);

    const sections = [
      { ref: placingRef, name: "Placing an Order" },
      { ref: shippingRef, name: "Shipping and Delivery" },
      { ref: returnsRef, name: "Returns and Exchanges" },
      { ref: supportRef, name: "Support and Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find((s) => s.ref.current === entry.target);
            if (matched) setActiveSection(matched.name);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  const placingOrderFaqs = data.filter(
    (item) => item.category === "Placing an Order"
  );
  const shippingDelivery = data.filter(
    (item) => item.category === "Shipping and Delivery"
  );
  const returnsExchanges = data.filter(
    (item) => item.category === "Returns and Exchanges"
  );
  const supportContact = data.filter(
    (item) => item.category === "Support and Contact"
  );

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* Sidebar */}
      <div className="lg:w-[450px] w-full bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white p-4 lg:sticky top-0 h-auto lg:h-screen space-y-4">
        {[
          "Placing an Order",
          "Shipping and Delivery",
          "Returns and Exchanges",
          "Support and Contact",
        ].map((title) => (
          <div
            key={title}
            className={`cursor-pointer py-2 px-1 rounded-md transition-all ${
              activeSection === title
                ? "font-bold bg-zinc-300 dark:bg-zinc-700"
                : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
            onClick={() => {
              const refs = {
                "Placing an Order": placingRef,
                "Shipping and Delivery": shippingRef,
                "Returns and Exchanges": returnsRef,
                "Support and Contact": supportRef,
              };
              refs[title].current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {title}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-10 lg:mt-20 px-4 lg:pl-6 text-black dark:text-white">
        <div ref={placingRef}>
          <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-5 m-4 rounded-md font-semibold text-lg">
            Placing an Order
          </div>
          {placingOrderFaqs.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>

        <div ref={shippingRef}>
          <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-5 m-4 rounded-md font-semibold text-lg">
            Shipping and Delivery
          </div>
          {shippingDelivery.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>

        <div ref={returnsRef}>
          <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-5 m-4 rounded-md font-semibold text-lg">
            Returns and Exchanges
          </div>
          {returnsExchanges.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>

        <div ref={supportRef}>
          <div className="w-full max-w-3xl bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-5 m-4 rounded-md font-semibold text-lg">
            Support and Contact
          </div>
          {supportContact.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
