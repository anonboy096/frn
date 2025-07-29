import React from 'react';
const Terms=()=>{   
const sections=[
    {
        title:"Acceptance of Terms:",
        content:"By using this website, you agree to comply with and be bound by all of our Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site."
    },
    {
        title:"Privacy Policy:",
        content:"We are committed to protecting the privacy of your personal data in accordance with our Privacy Policy. By using this site, you consent to the collection, use, and disclosure of your personal data in accordance with this policy."
    },
    {
        title:"Copyright and Intellectual Property:",
        content:"All copyrights and intellectual property rights to the content and materials on this site are owned by Store or its partners. Unauthorized use of these materials is prohibited and may constitute a violation of copyright laws."
    },
    {
       title:"Orders and Payments:",
        content:"By placing an order on this site, you confirm that you are legally eligible to enter into a contract and make payments for the goods or services ordered."
    },
    {
         title:"Delivery and Returns:",
        content:"Details regarding delivery options, associated costs, and return policies are specified in the dedicated sections of our site. Please review this information before placing your order"
    },
    {
       title:"Limitation of Liability:",  
       content:"Store shall not be liable for any loss or damage incurred as a result of the use or inability to use this website."
    } ,
    {
       title:"Changes to Terms and Conditions:",
       content:"We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the site. Your continued use of the site after any such changes constitutes your acceptance of those changes."


    }
]
  return (
    <div className='max-w-4xl mx-auto px-6 py-12 '>
      <h1 className='text-4xl font-semibold mb-8'>
        Terms and Conditions
      </h1>
      <p className='mb-6'>
        Welcome to Store, an online fashion retailer specializing in contemporary fashion and accessories. Please read these Terms and Conditions carefully before using our website.
      </p>
        {sections.map((section,idx)=>(
          <div key={idx}>
            <h2 className='text-xl font-medium mb-2'>
             {section.title}
            </h2>
            <p className='text-gray-400'>
              {section.content}
            </p>

          </div>
        ))}
        <p className='mt-10'>
         By using this website, you agree to abide by and be subject to these Terms and Conditions. For further questions or clarifications, please contact us through our contact page.
        </p>
      </div>
  );

}
export default Terms;
