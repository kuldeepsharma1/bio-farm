import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Privacy Policy | Arkin Organics",
  description:
    "Learn how Arkin Organics collects, uses, and protects your data. Review our privacy practices to understand your rights and our responsibilities.",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen w-full bg-white font-inter text-zinc-800">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        
        {/* Header Section */}
        <header className="mb-12 pb-8 border-b border-zinc-200">
          <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="inline-block w-2 h-2 rounded-full bg-green-600"></span>
            <p>
              <strong>Last Updated:</strong> June 25, 2025
            </p>
          </div>
        </header>

        {/* Introduction */}
        <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-12">
          Your privacy is critically important to us. This Privacy Policy
          describes how <strong className="text-green-700 font-semibold">Arkin</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses
          information that we obtain about visitors to our website{" "}
          <a
            href="https://www.arkin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            https://www.arkin.com
          </a>{" "}
          (the &quot;Site&quot;) and users of our services (the &quot;Services&quot;).
        </p>

        <div className="space-y-12 text-zinc-700">
          {/* Section 1: Information We Collect */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect information to provide and improve our Services, and to communicate with you.
            </p>

            <h3 className="text-xl font-semibold text-zinc-800 mt-6 mb-3">
              1.1. Information You Provide to Us
            </h3>
            <p className="leading-relaxed mb-4">
              We collect information you provide directly to us. For example, we collect information when you:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                { label: "Create an account:", text: "Your name, email address, password, and any other information you choose to provide." },
                { label: "Use our Services:", text: "Information related to your interactions, such as agricultural data, product orders, customer details, or reports you generate." },
                { label: "Contact us:", text: "When you send us an email, fill out a form, or otherwise communicate with us, we collect your name, email address, and the content of your communication." },
                { label: "Subscribe to newsletters:", text: "Your email address." },
                { label: "Participate in surveys or promotions:", text: "Any information you provide in response to our requests." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-900">{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">
              1.2. Information We Collect Automatically
            </h3>
            <p className="leading-relaxed mb-4">
              When you access or use our Site or Services, we may automatically collect information about you, including:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                { label: "Log and Usage Data:", text: "Your Internet Protocol (IP) address, browser type, operating system, pages viewed, referring/exit pages, and the date and time of your visit." },
                { label: "Device Information:", text: "Information about the computer or mobile device you use to access our Services, including hardware model, operating system and version, unique device identifiers, and mobile network information." },
                { label: "Cookies and Tracking Technologies:", text: "We use cookies and similar tracking technologies (like web beacons and pixels) to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies, though some parts of our Services may not function properly." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-900">{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Provide, operate, and maintain our Site and Services.",
                "Improve, personalize, and expand our Site and Services.",
                "Understand and analyze how you use our Site and Services.",
                "Develop new products, services, features, and functionality.",
                "Communicate with you for customer support, updates, and marketing.",
                "Send technical notices, updates, security alerts, and support messages.",
                "Process your transactions and manage your orders.",
                "Monitor and analyze trends, usage, and activities.",
                "Detect, prevent, and address technical issues and security incidents.",
                "Comply with legal obligations.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2.5 shrink-0" />
                  <span className="text-sm leading-relaxed text-zinc-700">{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How We Share Your Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              3. How We Share Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                { label: "With Service Providers:", text: "We share information with third-party vendors performing services on our behalf (e.g., payment processing, data analysis, email delivery, and hosting)." },
                { label: "For Business Transfers:", text: "Your information may be transferred as part of a merger, acquisition, financing, or sale of company assets." },
                { label: "For Legal Reasons:", text: "We may disclose your information if required by law or in response to valid requests by public authorities." },
                { label: "To Enforce Rights:", text: "We may disclose information to enforce our terms and conditions or protect our rights, safety, and property." },
                { label: "With Your Consent:", text: "We may share your information with your explicit consent or at your direction." },
                { label: "Aggregated or Anonymized Data:", text: "We may share non-identifiable aggregated data freely." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-900">{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 & 5: Security & Retention */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-zinc-50/80 p-6 rounded-2xl border border-zinc-100">
              <h2 className="text-xl font-medium text-zinc-900 mb-3">4. Data Security</h2>
              <p className="text-sm leading-relaxed">
                We implement reasonable security measures designed to protect your information. However, no electronic transmission over the Internet is 100% secure, so absolute security cannot be guaranteed.
              </p>
            </section>
            <section className="bg-zinc-50/80 p-6 rounded-2xl border border-zinc-100">
              <h2 className="text-xl font-medium text-zinc-900 mb-3">5. Data Retention</h2>
              <p className="text-sm leading-relaxed">
                We retain your information as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>
          </div>

          {/* Section 6: Your Data Protection Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              6. Your Data Protection Rights
            </h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 pl-2 mb-6">
              {[
                { label: "Right to Access:", text: "Request copies of your personal data." },
                { label: "Right to Rectification:", text: "Correct inaccurate information or complete incomplete data." },
                { label: "Right to Erasure:", text: "Request the deletion of your personal data under certain conditions." },
                { label: "Right to Restrict Processing:", text: "Restrict the processing of your personal data under certain conditions." },
                { label: "Right to Object:", text: "Object to our processing of your personal data under certain conditions." },
                { label: "Right to Data Portability:", text: "Request the transfer of your data to another organization or directly to you." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-50/80 p-4 rounded-xl border border-zinc-100">
                  <span className="h-2 w-2 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-900">{item.label}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed bg-green-50/50 p-4 rounded-xl border border-green-100 text-green-900">
              If you make a request, we have one month to respond. To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@arkin.com" className="font-semibold text-green-700 hover:underline">
                support@arkin.com
              </a>.
            </p>
          </section>

          {/* Sections 7, 8, 9 */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-zinc-900 mb-2">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our Services may contain links to external websites not operated by us. We strongly advise you to review the privacy policy of every site you visit as we assume no responsibility for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-900 mb-2">8. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. If you believe a child has provided us with data, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-900 mb-2">9. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>
          </div>

          {/* Section 10: Contact Us */}
          <section className="bg-zinc-50 border border-zinc-200 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 mb-4 tracking-tight">
              10. Contact Us
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please reach out to us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 font-medium">By email:</span>
                <a
                  href="mailto:support@arkin.com"
                  className="text-green-700 hover:underline font-medium"
                >
                  support@arkin.com
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

export default PrivacyPolicyPage;