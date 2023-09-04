import React from "react";
import ServiceImg from "../../assets/images/home/service-1.jpg";
import ServiceImg2 from "../../assets/images/home/service-2.jpg";
import ServiceImg3 from "../../assets/images/home/service-3.jpg";
import ServiceImg4 from "../../assets/images/home/service-4.jpg";
import ServiceImg5 from "../../assets/images/home/service-5.jpg";
import { styles } from "../../styles";

export const ServicesParts = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-[500px]">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Deborah Lynch
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-[200px] lg:h-[500px] order-first lg:order-last">
          <img
            className="w-full h-full object-cover"
            src={ServiceImg2}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-[500px]">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Business Development
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              At UKA, our experts will discuss your business with you in length
              and analyse the areas of concern, weakness, strength and where
              there is room for growth. We will assist you with your business
              plan, financial forecast, reviewing and drafting the necessary
              documents and contracts and help to take your business out of
              financial struggle if there’s a need or provide the necessary
              steps to grow and expand. You will run your business with your
              vision in mind, whilst we manage it with the suggested mission.
              Watch how your business will grow in 6 months! In addition to the
              financials, UKA will assist you with your HR and employment
              matters, from reviewing your staff contracts, to reviewing their
              progress, training them based on the Company’s business and
              introducing relevant policies and procedures.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Immigration – UAE
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              UAE immigration can only be carried out in one of two ways;
              company establishment or property purchase. We will establish a
              company for you in Dubai with your desired field of activity and
              you will be able to sponsor yourself and your family on the
              company with a 2-year visa. Your company will have to be renewed
              each year, whereas your visas will have to be renewed every 2
              years. We will assist you with A-Z of company incorporation and
              obtaining your visas and can also assist you with running your
              business with you in Dubai. Should you decide to purchase a
              property, you should pay a minimum of 750,000 AED, where you will
              receive a 3-year visa for yourself and your family. If your
              property is worth over 1 million AED and you are over the age of
              55, you are eligible for the retirement visa, which will allow you
              and your family to remain in the UAE for 5 years before having to
              renew your visa. Should your property worth over 2 million AED,
              you and your family will receive a golden visa of 10 years.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-[200px] lg:h-[500px] order-first lg:order-last">
          <img
            className="w-full h-full object-cover"
            src={ServiceImg2}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="col-span-1 h-[200px] lg:h-full">
          <img className="w-full h-full object-cover" src={ServiceImg} alt="" />
        </div>
        <div
          className={`col-span-1 bg-white flex flex-col gap-8 ${styles.padding} h-full justify-center`}
        >
          <div className="flex flex-col gap-1">
            <div className="h-[2px] bg-black w-[200px]"></div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Immigration – UK
            </h4>
          </div>
          <h4 className={`${styles.h4Text} text-black font-bold`}>
            Self-Sponsorship Visa
          </h4>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              If you’re an entrepreneur who would like to come to the UK to love
              and work, then this visa is for you. This is a type of visa where
              we establish a genuine company for you in the UK and a) we will
              put the appropriate processes and procedures in place, and b) we
              will obtain the relevant approvals from the Home Office to allow
              you to sponsor yourself under that Company. When the application
              is submitted to obtain approval for this process, the Home Office
              will scrutinise the application form and the documents provided in
              support of the application. They may also pay an in-person visit
              to the business to ensure it is a reputable organisation capable
              of undertaking its sponsorship duties. Upon obtaining the
              necessary approval from the Home Office, we will apply for a
              5-year visa for your move to the UK. As an applicant for this type
              of visa, you will need to prove your English language (reading,
              writing and speaking) and show that you have the relevant skills
              for the role that you want to carry out under the company’s
              sponsorship. Once you have remained in the UK for 5 years, you
              will be eligible to apply for the Indefinite Leave to Remain.
            </p>
          </div>
          <h4 className={`${styles.h4Text} text-black font-bold`}>
            Visit Visa
          </h4>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              Depending on your nationality, you may not need a visit visa.
              However, should there be a need for one, we will hold your hand
              through-out the entire process. Depending on your background,
              financial position and reasons for travel, you may be eligible to
              apply for a 6-month, 2-year, 5-year or a 10-year tourist visa. As
              the standard tourist visitor visa is only designed for short
              visits to the UK, there are certain things you are not permitted
              to do as a holder of this visa. These include but are not limited
              to: - Undertaking paid or unpaid work for a UK company or as a
              self-employed person; - Living in the UK for long periods of time
              through frequent visits; - Accessing public funds (benefits); -
              Partaking in a course of study that lasts more than six months; -
              Marrying or registering a civil partnership, or giving notice of
              marriage or civil partnership.
            </p>
          </div>
          <h4 className={`${styles.h4Text} text-black font-bold`}>
            Student Visa
          </h4>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              The Student Visa is for those aged 18 or over who wish to study in
              the UK, and who meet certain Home Office requirements. If you are
              at least 18 years of age and are set to undertake a degree-level
              course, the Student Visa usually enables you to stay in the UK for
              as long as 5 years. For courses that are below degree level, the
              visa holder can normally stay for up to two years. The exact
              amount of time that you are allowed to stay in the UK on a Student
              Visa will depend on the length of your course and what study you
              have already completed in the UK. You have the option of extending
              your Student Visa or switch to a Graduate Visa, which would
              entitle you to stay in the UK for at least two years after the
              success completion of your course. As a holder of the Student
              Visa, it may be possible for you to bring your partner and
              children with you to the UK as your ‘dependants’. To apply for
              this visa, it is expected that you will: - Have been offered a
              place on a course by a licensed student sponsor; - Have sufficient
              money to support yourself and pay for your course – the exact
              amount will depend on your circumstances; - Be able to speak,
              read, write and understand the English language; and - Have
              consent from your parents if you’re 16 or 17 years old; you will
              require evidence of this when you submit your application. Those
              ages 16 or 17 years who wish to study at an independent school in
              the UK may be eligible for a Child Student Visa instead.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
