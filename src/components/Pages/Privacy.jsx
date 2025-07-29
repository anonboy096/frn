import React from "react";

const Privacy=()=>{
     const sections=[
      {
        title:"Information We Collect",
        content: "When you visit our website,we may collect certain information about your device, including your IP address, browser type, and operating system. We also collect information about your browsing behavior on our site, such as the pages you visit and the products you view.",
      },
      {
        title:"Use of Information:",
        content: "We use the information we collect to provide and improve our services, communicate with you, process your orders, and personalize your shopping experience. We may also use your information to send you promotional offers and marketing communications.",
      },
      {
        title:"Disclosure of Information:",
        content: "We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. We may also share your information when required by law or to protect our rights, property, or safety",
      },
      {
         title:"Data Security:",
        content: "We take reasonable measures to protect the security of your personal information and prevent unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
         title:"Your Rights:",
        content: "You have the right to access, correct, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us by following the instructions provided in those communications.",
      },
      {
         title:"Changes to This Policy:",
        content: "We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates or changes.",
      },

     ]

     return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8 ">
          Privacy Policy 
           </h1>
           <p className="mb-6">
          At Store, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or make a purchase from us.
          </p>

          {sections.map((section,idx)=>(
            <div key={idx}>
              <h2 className="text-xl font-medium mb-2">
                {section.title}
                 </h2>
                 <p className="text-gray-400">
                  {section.content}
                 </p>
                 </div>
          ))}
          <p className="mt-10">
              By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us through our contact page.
             
          </p>
         
      </div>
     )
}
export default Privacy;