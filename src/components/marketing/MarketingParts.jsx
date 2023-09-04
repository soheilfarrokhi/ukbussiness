import React from "react";
import ServiceImg from "../../assets/images/home/service-1.jpg";
import ServiceImg2 from "../../assets/images/home/service-2.jpg";
import ServiceImg3 from "../../assets/images/home/service-3.jpg";
import ServiceImg4 from "../../assets/images/home/service-4.jpg";
import ServiceImg5 from "../../assets/images/home/service-5.jpg";
import { styles } from "../../styles";

export const MarketingParts = () => {
  return (
    <>
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
              Digital Marketing
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              In a world where education, business and life are continuing to
              divert online, developing an effective digital marketing plan is a
              must for every organisation looking to progress. Digital marketing
              is promoting a product or a service using digital technologies
              such as advertising on the internet, digital display, TV and any
              other digital medium. The promotion is further done by email
              marketing, pay-per-click advertising, social media, blogging and
              vlogging. This is a way of introducing a product or a service to
              your target audience and attracting them to either enquire or
              purchase from you. As a digital marketer, we monitor whether your
              product or service is being attracted and viewed by your target
              audience, how often, how many of those views have been converted
              into sales and what types of marketing works better for your
              business. We use that information to boost your product and/or
              services towards your business growth. Using our unique expertise,
              we develop and execute creative influencer marketing strategies to
              amplify your brand story at scale and reach millions of people.
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
              Social Media Management
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              UKA is a digital and traditional marketing agency inspired to help
              you build your brand. We specify your message and your brand’s
              voice to craft a story that connects you with your audience
              through social media and other panels. We will find the most
              appropriate media platforms to advertise the business’ product
              and/or service on, and also aim to grow the business, increase
              attraction, engagement and ultimately sales. As a business’ social
              media managers, we determine what type of content should be posted
              as well as when, where and how often with the aim of reaching the
              right target audience at the right time, with the right message to
              generate the desired response. Using our complete end-to-end
              social media platform management, we offer comprehensive packages
              that will provide you with everything that you need to build,
              boost and manage your online presence. This includes but is not
              limited to:
            </p>
            <div className="flex flex-col w-full gap-4 my-8">
              <div>- Regular scheduled posts and updates</div>
              <div>- Content creation </div>
              <div>
                - Storytelling and formulating your message to your audience via
                posts{" "}
              </div>
              <div>- Monitoring and reports</div>
              <div>- Motion graphics</div>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-[200px] lg:h-full order-first lg:order-last">
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
              Graphic Designing
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              As graphic designers, we are responsible for creating designs for
              advertising including but not limited to promotional displays,
              packaging and marketing brochures for products and services,
              designing logos, webpages, interactive media and multimedia
              projects. As graphic designers we plan, analyse, and create visual
              solutions to communication problems. The solutions are shown
              through messages, which are conveyed in print and electronic media
              by using colour, illustration, photography, animation and various
              layout techniques. In addition, we are responsible for developing
              the overall layout and production design for a business, including
              but not limited to:
            </p>
            <div className="flex flex-col w-full gap-4 my-8">
              <div>- Magazines</div>
              <div> - Newspapers </div>
              <div>- Journals</div>
              <div>- Monitoring and reports</div>
              <div>- Corporate reports</div>
              <div>- Other publications</div>
            </div>
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
              Branding
            </h4>
          </div>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              Our production department breathes life into your projects and
              concepts that will define your brand and its vision. The artistic
              interpreters and scenic heroes that paint majestic paintings and
              imaginative stories with every click of a button and a flash of a
              light. With us, you will get nothing but the best. We help you
              brand your:
            </p>
            <div className="flex flex-col w-full gap-4 my-8">
              <div>- Logo </div>
              <div>- Colour palette and fonts</div>
              <div>- Company mission and vision</div>
              <div>- Corporate identity guide</div>
              <div>- Corporate reports</div>
              <div>- Create your brand book </div>
            </div>
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
              Photo and Videography
            </h4>
          </div>
          <div className="flex flex-col">
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              Photography
            </h4>
            <p className={`${styles.pText} text-black`}>
              Photography is about capturing a single moment, a place, or a
              memorable event. Given that a photo can speak a thousand words, it
              is important to portray those words into a magnificent message. As
              a result, content including photography and visuals create a much
              higher engagement with the target audience. The first impression
              of the photos that a business shares with its target audience is
              extremely important. Therefore, it is crucial to share photos
              which reflect the business’ professionalism and credibility.
              Without high quality or professional photos to grab your target’s
              attention, you risk hiding your best qualities and therefore risk
              losing a potential customer and/or a sale before having a choice
              to introduce yourself.
              <br />
              From your website content to your social media content, we will
              assist you in creating engaging photos of your product, service
              and also events, and offer to edit and enhance the photos to
              create a picture-perfect moment. Our photography services include
              but are not limited to:
            </p>
            <div className="flex flex-col w-full gap-4 my-8">
              <div>- Fashion, beauty and lifestyle </div>
              <div>- Modeling</div>
              <div>- Events, parties and weddings</div>
              <div>- Corporate events</div>
              <div>- Architectural </div>
              <div>- Industrial </div>
              <div>- Business </div>
            </div>
            <h4 className={`${styles.h4Text} text-black font-bold`}>
              videography
            </h4>
            <p className={`${styles.pText} text-black`}>
              An effective video drives action. We therefore, create targeted
              strategies so that your video content speaks to the right
              audience, in the right way, through the right channels. Our aim of
              building collaborative relationships rather than ‘cut-throat
              business as usual’ approach pushes our creativity and makes us
              challenge ourselves everyday. Our videography services include but
              are not limited to:
            </p>
            <div className="flex flex-col w-full gap-4 my-8">
              <div>- TV commercials</div>
              <div>- Motion graphics</div>
              <div>- Animations</div>
              <div>- Industrial films</div>
              <div>- Social media videos and reels</div>
              <div>- Editing services </div>
              <div>- Colour grading and correction</div>
            </div>
          </div>
          <h4 className={`${styles.h4Text} text-black font-bold`}>
            Website Designing
          </h4>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              We provide an expert approach to your business to create a
              user-friendly website in order to pass your message to your target
              audience. Whether you need a simple one-pager or a complex,
              digital platform, we have got you covered to ensure a consistent
              approach across desktop, tablet and mobile platforms.
              <br />
              Your website is often your first and only chance to make a good
              impression when someone finds you online. Whether you’re looking
              for an aesthetically pleasing showcase of your best work or a
              helpful and intuitive website exploring the benefits you bring to
              the table, our design team is ready to create your beautifully
              interactive, SEO-friendly website.
              <br />
              We can build a well-optimised, user-friendly website with Search
              Engine Optimisation (SEO) content that commands better online
              visibility and attracts more traffic. Our in-house team of web
              developers and graphic designers can develop a customised website
              that meet all your requirements.
            </p>
          </div>
          <h4 className={`${styles.h4Text} text-black font-bold`}>
            Influencer Marketing
          </h4>
          <div className="flex flex-col">
            <p className={`${styles.pText} text-black`}>
              Interested in becoming an influencer or a social media marketer?
              From mediating brand deals to boosting your online presence, our
              specialist talent managers will assist you as they have assisted,
              managed, and developed 100s of successful influencers. Regardless
              of age or background, we always believe that everyone has their
              hidden talents within them, and we help you find and nurture those
              talents with the hope of becoming spotlight creators both
              nationally and internationally. We will assist you and that’s the
              ‘key’ word… you need to have full control as you know yourself and
              your audience the best.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
