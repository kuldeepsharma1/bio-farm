import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Terms & Conditions | Arkin Organics",
  description: "Read the terms and conditions governing the use of Arkin Organics. By using our services, you agree to abide by our usage policies and legal terms.",
};

const TermsConditionsPage = () => {
  return (
    <main className="min-h-screen w-full bg-white font-inter text-zinc-800">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        
        {/* Page Title */}
        <header className="mb-12 pb-8 border-b border-zinc-200">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="inline-block w-2 h-2 rounded-full bg-green-600"></span>
            <p>
              <strong>Last Updated:</strong> June 25, 2025
            </p>
          </div>
        </header>

        {/* Introductory Paragraphs */}
        <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6">
          Welcome to <strong className="text-green-700 font-semibold">Arkin</strong>! These terms and conditions outline the rules and regulations for the use of <strong className="text-green-700 font-semibold">Arkin&apos;s</strong> Website, located at{" "}
          <a
            href="https://www.arkin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            https://www.arkin.com
          </a>.
        </p>
        <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-12">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use <strong className="text-green-700 font-semibold">Arkin</strong> if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <div className="space-y-12 text-zinc-700">
          {/* Section 1: Introduction and Definitions */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              1. Introduction and Definitions
            </h2>
            <p className="leading-relaxed">
              The following terminology applies to these Terms and Conditions, Privacy Statement, Disclaimer Notice, and all Agreements: &quot;Client&quot;, &quot;You&quot;, and &quot;Your&quot; refer to you, the person logging onto this website and compliant with the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, and &quot;Us&quot; refer to our Company, <strong className="text-green-700">Arkin</strong>. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot; refer to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of the provision of the Company&apos;s stated services, in accordance with and subject to the prevailing law of <span className="text-green-700 font-semibold">India</span>.
            </p>
          </section>

          {/* Section 2: Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              2. Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              We employ the use of cookies. By accessing <strong className="text-green-700 font-semibold">Arkin</strong>, you agree to use cookies in accordance with <strong className="text-green-700 font-semibold">Arkin&apos;s</strong> Privacy Policy.
            </p>
            <p className="leading-relaxed">
              Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </section>

          {/* Section 3: License */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              3. License
            </h2>
            <p className="leading-relaxed mb-4">
              Unless otherwise stated, <strong className="text-green-700 font-semibold">Arkin</strong> and/or its licensors own the intellectual property rights for all material on <strong className="text-green-700 font-semibold">Arkin</strong>. All intellectual property rights are reserved. You may access this from <strong className="text-green-700 font-semibold">Arkin</strong> for your own personal use, subject to restrictions set in these terms and conditions.
            </p>
            <p className="leading-relaxed mb-4 font-semibold text-zinc-900">
              You must not:
            </p>
            <ul className="space-y-3 pl-2 mb-4">
              {[
                "Republish material from Arkin",
                "Sell, rent, or sub-license material from Arkin",
                "Reproduce, duplicate, or copy material from Arkin",
                "Redistribute content from Arkin"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed text-zinc-700">{text}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-sm text-zinc-500 italic">
              This Agreement shall begin on the date hereof.
            </p>
          </section>

          {/* Section 4: User Comments */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              4. User Comments
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                <span className="leading-relaxed text-zinc-700">
                  Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. <strong className="text-green-700 font-semibold">Arkin</strong> does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of <strong className="text-green-700 font-semibold">Arkin</strong>, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, <strong className="text-green-700 font-semibold">Arkin</strong> shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                <span className="leading-relaxed text-zinc-700">
                  <strong className="text-green-700 font-semibold">Arkin</strong> reserves the right to monitor all Comments and to remove any Comments that can be considered inappropriate, offensive, or in breach of these Terms and Conditions.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                <span className="leading-relaxed text-zinc-700">
                  <strong className="text-zinc-900 font-semibold block mb-2">You warrant and represent that:</strong>
                  <ul className="space-y-2 pl-4 list-disc text-zinc-700">
                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material that is an invasion of privacy;</li>
                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                <span className="leading-relaxed text-zinc-700">
                  You hereby grant <strong className="text-green-700 font-semibold">Arkin</strong> a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5: Hyperlinking to our Content */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              5. Hyperlinking to our Content
            </h2>
            <p className="leading-relaxed mb-4">
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul className="space-y-3 pl-2 mb-4">
              {[
                "Government agencies;",
                "Search engines;",
                "News organizations;",
                "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
                "System-wide Accredited Businesses, except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups, which may not hyperlink to our Website."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed text-zinc-700">{text}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">
              These organizations may link to our home page, publications, or other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&apos;s site.
            </p>
          </section>

          {/* Section 6: iFrames */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              6. iFrames
            </h2>
            <p className="leading-relaxed">
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
          </section>

          {/* Section 7: Content Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              7. Content Liability
            </h2>
            <p className="leading-relaxed">
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise from your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.
            </p>
          </section>

          {/* Section 8: Reservation of Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              8. Reservation of Rights
            </h2>
            <p className="leading-relaxed">
              We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound by and follow these linking terms and conditions.
            </p>
          </section>

          {/* Section 9: Removal of Links from our Website */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              9. Removal of Links from our Website
            </h2>
            <p className="leading-relaxed">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but are not obligated to do so or to respond to you directly.
            </p>
          </section>

          {/* Section 10: Disclaimer */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              10. Disclaimer
            </h2>
            <p className="leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our Website and the use of this Website. Nothing in this disclaimer will:
            </p>
            <ul className="space-y-3 pl-2 mb-4">
              {[
                "Limit or exclude our or your liability for death or personal injury;",
                "Limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
                "Limit any of our or your liabilities in any way that is not permitted under applicable law; or",
                "Exclude any of our or your liabilities that may not be excluded under applicable law."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed text-zinc-700">{text}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
            </p>
          </section>

          {/* Section 11: Specific Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              11. Specific Terms
            </h2>
            <p className="leading-relaxed mb-4">
              The following terms are specific to the services provided by <strong className="text-green-700 font-semibold">Arkin</strong>:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                { label: "Payment Terms:", text: "All payments for services or products must be made in accordance with the pricing and payment schedule outlined at the time of purchase. Late payments may incur a fee of 1.5% per month on the outstanding balance." },
                { label: "Refund Policy:", text: "Refunds are available within 30 days of purchase for eligible products or services, provided they have not been used or accessed substantially. Contact support@arkin.com for refund requests." },
                { label: "Subscription Terms:", text: "Subscriptions automatically renew unless canceled at least 48 hours before the renewal date. You may cancel your subscription through your account dashboard or by contacting support." },
                { label: "User Conduct:", text: "Users must not engage in any activity that disrupts or interferes with our services, including hacking, spamming, or uploading malicious content." },
                { label: "Limitation of Liability:", text: "To the fullest extent permitted by law, Arkin shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or services." },
                { label: "Governing Law and Jurisdiction:", text: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Himachal Pradesh / New City, Baddi." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed text-zinc-700">
                    <strong className="text-zinc-900">{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 12: Contact Information */}
          <section className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              12. Contact Information
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 font-medium">By email:</span>
                <a href="mailto:support@arkin.com" className="text-green-700 hover:underline font-medium">
                  support@arkin.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 font-medium">By website:</span>
                <a href="https://www.arkin.com/contact" className="text-green-700 hover:underline font-medium">
                  https://www.arkin.com/contact
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-500 font-medium">By mail:</span>
                <span className="text-zinc-800">
                  Arkin, New City, Baddi Industrial Area, Himachal Pradesh, India
                </span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default TermsConditionsPage;