import MainLayout from "@/app/layouts/MainLayout";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <MainLayout background={false}>
      <div className="flex flex-col px-5 py-5 text-[16px] leading-loose text-neutral-900 md:px-10 md:py-10 lg:px-[80px] xl:px-[240px]">
        {/* Title */}
        <h1 className="pb-[32px] text-3xl font-semibold text-neutral-900">
          Privacy Policy
        </h1>
        <p className="pb-[32px]">
          <strong>Last updated: 17 Jan 2024</strong>
        </p>
        <p>
          This policy describes the privacy practices of Desmos Labs Limited (“
          <strong>Desmos Labs</strong>”, “we” or “us”) with respect to the
          Mooncake application and related content, features, and functionality
          (collectively, the “<strong>Platform</strong>”) and the various
          services that we offer to you on or through the Platform (the “
          <strong>Services</strong>”). Users of our Services are referred to as
          “<strong>users</strong>” or “you”.
        </p>
        <p>
          <strong>
            Please read this policy and the Mooncake Terms of Use carefully
            before engaging with the Platform or using the Services.
          </strong>
        </p>
        <p>
          <strong>
            If you are uncomfortable with the immutable, permanent and
            transparent nature of entries on a blockchain, you should not engage
            with the Platform or use the Services.
          </strong>
        </p>
        <p>
          By engaging with our Platform and using our Services, you accept the
          privacy practices as set out in this policy, as may be modified or
          supplemented from time to time. If you are engaging with our Platform
          or using our Services as a representative of an organisation, you are
          accepting these practices on their behalf.
        </p>
        <p>
          If you have any questions about this policy or any privacy issues
          related to your use of our Services, please contact us by email to
          privacy@desmos.network .
        </p>
        {/* About Us */}
        <h2 className="py-[32px] text-2xl font-semibold" id="about">
          About us
        </h2>
        <p>
          Mooncake is a decentralised social network based on the Desmos Network
          Proof of Stake blockchain protocol offered by Desmos Labs.
        </p>
        <p>
          Desmos Network allows developers to build social networking or
          social-enable apps. Desmos Labs also offers decentralised applications
          built on the Desmos protocol.
        </p>
        <p>
          Desmos Labs Limited is a company incorporated in Hong Kong with
          company registration number 3210522, having its registered office at
          Flat 3B, Tontex Industrial Building, 2-4 Sheung Hei Street, San Po
          Kong, Kowloon, Hong Kong.
        </p>

        {/* Personal information we collect from you */}
        <h2
          className="py-[32px] text-2xl font-semibold"
          id="personal-information-we-collect"
        >
          Personal information we collect from you
        </h2>
        <p>
          Previous explicit approval from you, the information we automatically
          collect from you through the Services (or third-party services we
          engage) includes:
        </p>
        <ol className="list-inside list-decimal py-2 pl-8">
          <li>
            Information about your computer or mobile device that you use to
            access our Platform or our Services, such as device information,
            unique identifiers, operating system and timezone.
            <ul className="list-roman list-inside py-2 pl-10">
              <li>
                These information are collected through a third-party,
                open-source service: PostHog.
              </li>
            </ul>
          </li>
          <li>
            Information about your online activities and actions on the
            Platform, such as your usage data, navigation path, frequency of
            visit and length of access to the Platform, whether you are
            returning or new user.
            <ul className="list-roman list-inside py-2 pl-10">
              <li>
                These information are collected through a third-party,
                open-source service: PostHog.
              </li>
            </ul>
          </li>
          <li>
            Device information, unique identifiers, and interaction data.
            <ul className="list-roman list-inside py-2 pl-10">
              <li>
                These information may be collected by a third-party service:
                Firebase.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          <strong>
            NOTE: Due to the immutable, permanent and transparent nature of
            blockchain protocols and applications, you must carefully consider
            what information you choose to publish about yourself (through the
            creation of the Profile) or share with others, since you may not be
            able to erase, remove or delete it, nor control who has access to
            it.
          </strong>
        </p>
        <p>
          We do not collect sensitive data or special category data about you.
          This includes details about your race, ethnic origin, politics,
          religion, trade union membership, genetics, biometrics, health, or
          sexual orientation.
        </p>
        <p>We do not knowingly collect or use personal data from minors.</p>

        {/* How we use personal information */}
        <h2
          className="py-[32px] text-2xl font-semibold"
          id="how-we-use-personal-information"
        >
          How we use personal information
        </h2>
        <p>
          We use your personal information as necessary to deliver our Services
          to you, including:
        </p>
        <ol className="list-inside list-decimal py-2 pl-8">
          <li>to operate the Services and our business;</li>
          <li>
            to maintain and improve our Services or certain functionalities or
            features of our Services;
          </li>
          <li>
            to process your transactions or your interactions with Desmos
            protocol;
          </li>
          <li>
            to communicate with you regarding the Services, such as
            announcements, updates, security alerts, and system administrative
            information; and
          </li>
          <li>
            to provide support when you use our Services, such as responding to
            your requests and enquiries.
          </li>
        </ol>
        <p>
          In addition, we use your personal information for legitimate business
          purposes, including:
        </p>
        <ol className="list-inside list-decimal py-2 pl-8">
          <li>
            to update you about our Services or notifying you about our new
            products and features;
          </li>
          <li>
            to analyse, research and review user behaviour anonymously or on an
            aggregated basis, and to develop and evaluate new products or
            features;
          </li>
          <li>
            to investigate issues such as security breaches, cyberattacks or
            scams;
          </li>
          <li>
            to comply with applicable laws and regulations, or to defend legal
            actions against you, us or other users of the Platform; and
          </li>
          <li>
            to enforce the Terms of Use that govern the use of the Platform and
            the Services.
          </li>
        </ol>
        <p>
          We may also use personal information for any purposes for which you
          grant us your specific consent.
        </p>
        {/* How we share your personal information */}
        <h2
          className="py-[32px] text-2xl font-semibold"
          id="how-we-share-your-personal-information"
        >
          How we share your personal information
        </h2>
        <p>We do not sell your personal information.</p>
        <p>We share your personal information with the following parties:</p>
        <ol className="list-inside list-decimal py-2 pl-8">
          <li>
            service providers (including companies and individuals) that help us
            operate the Services, such as web traffic tracking, analytics,
            storage or payment solutions;
          </li>
          <li>
            professional advisors, including lawyers, attorneys, auditors,
            bankers and insurers where necessary;
          </li>
          <li>
            law enforcement, judicial, regulatory or governmental authorities
            where applicable;
          </li>
          <li>
            parties that acquire control over all or any substantial portion of
            the business or assets of Desmos Labs, such as in a business merger,
            acquisition or reorganization or transactions with similar nature;
            and
          </li>
          <li>
            third party platforms where you have enabled features or
            functionality that connect the Services with any third party’s
            services, in which case you must review the terms and conditions and
            privacy policy of such third party.
          </li>
        </ol>
        <p>
          We require our third-party service providers to maintain
          confidentiality and security of all personal information that they
          process for us or on our behalf. We also require that they implement
          and maintain reasonable security measures to protect the
          confidentiality of your personal information.
        </p>

        {/* Your choices */}
        <h2 className="py-[32px] text-2xl font-semibold" id="your-choices">
          Your choices
        </h2>
        <p>
          You may update or correct any personal information we hold in our
          systems anytime by contacting us at{" "}
          <a href="mailto:privacy@desmos.network">privacy@desmos.network</a> .{" "}
          <strong>
            However, due to the immutable, permanent and transparent nature of
            blockchain protocols and applications, we are unable to erase,
            remove or delete your information recorded on-chain, or any files
            that have been posted to the InterPlanetary File System or similar
            decentralised storage systems.
          </strong>
        </p>
        <p>
          You may opt out of our notifications. However, you may not opt out of
          receiving notifications that are transactional (such as completion of
          on-chain transaction) or administrative (such as announcement related
          to security breaches or cyberattacks)
        </p>
        <p>
          You may opt out from user tracking, such as user&apos;s behavioural
          tracking, from the application&apos;s settings page.
        </p>
        <p>
          If you have given us consent to use your personal information for a
          specific purpose, you may withdraw your consent anytime by contacting
          us at privacy@desmos.network .
        </p>
        <p>
          If you have any questions or feedback regarding how we address your
          requests concerning your personal data, please contact us at
          privacy@desmos.network .
        </p>
        {/* Retention of your personal data */}
        <h2 className="py-[32px] text-2xl font-semibold" id="data-retention">
          Retention of your pe rsonal data
        </h2>
        <p>
          We only keep your personal information for as long as necessary to
          fulfil the purposes for which your personal information is collected,
          including for the purposes of fulfilling any legal, accounting or
          reporting requirements.
        </p>
        <p>
          However, due to the immutable, permanent and transparent nature of
          blockchain protocols and applications, we are unable to erase, remove
          or delete your information recorded on-chain, or any files that have
          been posted to the InterPlanetary File System or similar decentralised
          storage systems even after the retention period has expired.
        </p>

        {/* Security and transfer of your personal data */}
        <h2
          className="py-[32px] text-2xl font-semibold"
          id="data-security-and-transfer"
        >
          Security and transfer of your personal data
        </h2>
        <p>
          We employ a number of technical and organisational measures to
          safeguard the security of the personal information we collect.
          However, we are unable to guarantee the security of your personal
          information.
        </p>
        <p>
          Within Desmos Labs, access to your personal information is restricted
          to personnel or service providers on a strictly need-to-know basis.
        </p>
        <p>
          We collect personal information globally. We may transfer, process and
          store your personal information outside your country of residence, and
          the parties with whom we share your personal information may operate
          in a country outside your country of residence.
        </p>
        <p>
          Some of the countries in which the parties with whom we share your
          personal information operate may not have the privacy and data
          protection laws that are equivalent to those in your country of
          residence. When we share information with these parties, we use our
          best endeavours (such as by entering into contractual terms) to
          safeguard the security of the information transferred.
        </p>

        {/* Update or amendment */}
        <h2
          className="py-[32px] text-2xl font-semibold"
          id="update-or-amendment"
        >
          Update or amendment
        </h2>
        <p>
          We reserve the right to update or amend this policy at any time to
          reflect changes in our practices or services. We will notify you of
          any material changes to this policy by posting the updated policy on
          our website or through our application.
        </p>
        <p>
          Your continued use of our application after any changes to this policy
          will constitute our acceptance of such changes.
        </p>

        {/* Contact us */}
        <h2 className="py-[32px] text-2xl font-semibold" id="contacts">
          Contact us
        </h2>
        <p>
          You may reach us by email at privacy@desmos.network , or at the
          following address:
        </p>
        <ul className="list-none">
          <li>Flat 3B, Tontex Industrial Building</li>
          <li>2-4 Sheung Hei Street, San Po Kong</li>
          <li>Kowloon, Hong Kong</li>
        </ul>
      </div>
    </MainLayout>
  );
}
