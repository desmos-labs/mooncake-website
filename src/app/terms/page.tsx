import MainLayout from "@/app/layouts/MainLayout";
import React from "react";

export const metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <MainLayout background={false}>
      <div className="w-full">
        <div className="flex flex-col px-5 py-5 text-[16px] leading-loose text-neutral-900 md:px-10 md:py-10 lg:px-[80px] xl:px-[240px]">
          <h1 className="pb-[32px] text-3xl font-semibold leading-9 text-neutral-900">
            Terms of Service
          </h1>
          <p className="pb-4">
            The following terms and conditions govern your access to and use of
            the Mooncake application, and any related content, products, and
            services offered by Desmos Labs Limited (collectively, the “
            <strong>Platform</strong>”).{" "}
            <strong>
              Please read these terms and conditions carefully before using our
              Platform.
            </strong>
          </p>
          <p className="pb-4">
            The Platform is operated by Desmos Labs Limited, a company
            incorporated in Hong Kong with company registration number 3210522,
            having its registered office at Flat 3B, Tontex Industrial Building,
            2-4 Sheung Hei Street, San Po Kong, Kowloon, Hong Kong (“
            <strong>Desmos Labs</strong>
            ”, “we” or “us”). Users of our services are referred to as “
            <strong>users</strong>” or “you”.
          </p>
          <p>
            By using our Platform, you agree to be legally bound by these terms
            and conditions, as they may be modified or supplemented from time to
            time (these “<strong>Terms</strong>
            ”). If you are accessing or using our Platform as a representative
            of an organization, you are agreeing to these Terms on their behalf.
            Desmos Labs and users are referred to as “parties” in these Terms.
          </p>

          {/* Our Platform */}
          <h2
            id="platform"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Our Platform
          </h2>
          <p>
            Mooncake is a decentralised social network application built on the
            Desmos protocol.
          </p>
          <p>
            Mooncake does not collect your personal data (such as your email
            address or your mobile phone number) when you create your Mooncake
            account or profile, or when you use or interact with Mooncake. You
            are completely free in submitting any information about yourself.
            Please refer to our Privacy Policy for details on how we handle any
            personal data we receive from you.
          </p>
          <p>
            Each account registered with Mooncake is only accessible by you. If
            you have lost the password to your account, you may recover by
            re-importing your account through one of the methods offered by the
            app. If you lose access to one of those methods, for example if you
            lose your Private Key, you will not be able to recover your account,
            and we, Desmos Labs and our officers and employees, will not be able
            to recover your account either.
          </p>
          <p>
            Any data or transaction history is stored only on the Desmos
            Blockchain where you install and run the Mooncake application. We,
            Desmos Labs and our officers and employees, have no write access to
            your data or history. This means we can&apos;t edit or delete your
            content on-chain.
          </p>
          <p>
            Due to the immutable nature of blockchain networks and applications,
            once you perform an action on Mooncake, there will always be an
            immutable record to that specific action inside the Desmos Network
            Blockchain.
          </p>
          <p>
            We may update, upgrade, improve or change any functions or features
            of Mooncake, and any other products or services we offer from time
            to time. We may also change or discontinue any of the products or
            services we offer, or add, remove or modify functionalities or
            features, and we may suspend or stop certain products, services,
            functionalities or features altogether.
          </p>

          {/* Intellectual Property Rights */}
          <h2
            id="property-rights"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Intellectual Property Rights
          </h2>
          <p>
            All intellectual property rights subsisting in our Platform
            (including our applications, source code, software, content, text,
            graphics, images, logos, audio or visual files and other materials,
            offered from time to time, and all improvements, enhancements,
            modifications, updates thereof from time to time, collectively, our
            “<strong>Proprietary Materials</strong>”) belong to us. All rights
            in the Proprietary Materials under applicable laws are hereby
            reserved.
          </p>
          <p>
            Using, copying, reproducing, publishing, distributing, selling of
            any parts or components of our Proprietary Materials, is strictly
            prohibited, unless:
          </p>
          <ol>
            <li>as expressly permitted by these Terms; or</li>
            <li>with our prior written approval.</li>
          </ol>
          <p>
            You are given a personal, worldwide, royalty-free, non-assignable,
            non-transferrable, non-exclusive and revocable licence to access and
            use our Proprietary Materials. Such licence:
          </p>
          <ol>
            <li>
              is for the sole purpose of enabling you to use and enjoy the
              benefit of our Platform as offered by us and in such manner as
              permitted by these Terms; and
            </li>
            <li>
              will be revoked and terminated if you breach any of these Terms,
              including the Acceptable Use Policy.
            </li>
          </ol>
          <p>
            Any commercial distribution, publishing or exploitation of our
            Proprietary Materials is strictly prohibited unless with our prior
            written approval.
          </p>
          <p>
            Our brand names and trade names, trade marks, service marks, logos
            and trade dress, whether registered or unregistered, belong to us,
            and may not be used, displayed or reproduced without our express
            written consent.
          </p>
          <p>
            By posting content (including any text, graphics, images, logos,
            audio or visual files and other materials) on Mooncake (your “
            <strong>User Content</strong>”), you grant us a perpetual,
            irrevocable, worldwide, royalty-free, and non-exclusive licence to
            use, reproduce, publish, distribute your User Content for the
            purpose of providing our services to you.
          </p>
          <p>
            In these Terms, “<strong>intellectual property rights</strong>”
            include patents, rights to inventions, copyright and related rights,
            all other rights in the nature of copyright, trade marks, business
            names and domain names, rights in get-up, goodwill and the right to
            sue for passing off, rights in designs, database rights, rights to
            use and protect the confidentiality of confidential information
            (including know-how), and all other intellectual property rights, in
            each case whether registered or unregistered and including all
            applications and rights to apply for and be granted renewals or
            extensions of, and rights to claim priority from, such rights and
            all similar or equivalent rights or forms of protection which
            subsist or will subsist now or in the future in any part of the
            world.
          </p>

          {/* Disclaimers */}
          <h2
            id="disclaimers"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Disclaimers
          </h2>
          <p>PLEASE READ THIS SECTION CAREFULLY.</p>
          <p>
            We provide the Platform and any products or services we offer on an
            “<strong>as is</strong>” and “<strong>as available</strong>” basis,
            and your access to or use of our Platform is{" "}
            <strong>at your own risk</strong>.
          </p>
          <p>
            We try our best to ensure that our Platform is available at all
            times, but we do not guarantee that the operation of or access to
            our Platform will always be uninterrupted or continuous. Our
            Platform may be interrupted for maintenance, archiving, repairs,
            upgrades, or due to network or equipment failures.
          </p>
          <p>
            We do not guarantee that the information or content you find on the
            Platform is always accurate, truthful, complete and up-to-date.
          </p>
          <p>
            We give no assurance, representation or warranty of any kind
            (whether express or implied, whether on functionality, availability,
            security, merchantability, fitness for a particular purpose,
            non-infringement or otherwise) about the Platform and any products
            or services we provide.
          </p>
          <p>
            You are responsible for configuring your information technology,
            computer programmes and platform or system in order to access our
            Platform. We are not responsible for any delay or disruption in our
            Platform or any defect, viruses, bugs or errors.
          </p>
          <p>
            Our Platform includes links to third-party websites, such as the
            websites of various blockchain networks or crypto projects. If you
            access any of these third-party websites, you will be doing so at
            your own risk. We do not examine or evaluate the information of any
            third-party websites. We expressly disclaim any liability or
            responsibility for any material or information contained in any
            third-party websites, or any products or services offered by third
            parties.
          </p>
          <p>
            Mooncake is built on Desmos which is an open-source blockchain
            protocol. We are unable to control any person who uses Mooncake or
            any other products or services that we offer. We expressly disclaim
            any liability or responsibility for any acts or omissions of any
            Mooncake users, including any content posted by any Mooncake users.
          </p>
          <p>
            In the event that any person uses Mooncake or any other products or
            services that we offer for any unlawful purpose or in contravention
            of any of these Terms, we are unable to interfere with, stop or
            remove such applications.
          </p>
          <p>
            Due to the nature of blockchain networks, some actions in Mooncake
            require interactions with the Desmos network, for which you may
            incur fees (normally known as “gas fees”) in order for such actions
            or transactions to be processed. Such fees are non-refundable and
            payable in DSM, a crypto token and the native token of Desmos
            network.{" "}
            <strong>
              You are fully responsible for all risks associated with DSM. If
              you are in doubt regarding your rights, obligations and possible
              risks related to DSM or crypto tokens in general, you must seek
              independent professional advice.
            </strong>
          </p>
          <p>
            DSM only entitles its holder to interact with the Desmos network.
            DSM does not entitle its holder to any interest or rights with
            respect to Desmos Labs (such as equity interest or voting rights in
            Desmos Labs, rights to appoint directors or inspect books and
            records of Desmos Labs).
          </p>
          <p>
            You may acquire DSM from crypto token exchanges.{" "}
            <strong>
              Desmos Labs does not offer any exchange service and is not related
              to any exchanges (centralised or decentralised). You must do your
              own independent research, due diligence and analysis before
              sending your funds to or in any way interacting with exchanges.
            </strong>
          </p>
          <p>
            You may receive DSM as a gratuity for the content you generate on
            Mooncake. These DSM tokens are exclusively sent by fellow users.
          </p>
          <p>
            To the fullest extent permitted by law, Desmos Labs and its holding
            company(ies), subsidiary(ies), affiliates, directors, officers,
            employees, agents and representatives expressly disclaim any
            liability or responsibility for:
          </p>
          <ol>
            <li>
              any error or interruption in usage or any loss, inaccuracy or
              corruption of data, nor any cost of procurement of substitute
              goods, services or technology;
            </li>
            <li>
              any damages, losses, claims (whether in contract, tort or
              otherwise), costs (including professional fees and expenses),
              whether direct, indirect, special, incidental, punitive,
              exemplary, consequential, or of any other kind (including, without
              limitation, any loss of revenue, profits, opportunities, business,
              goodwill or reputation);
            </li>
            <li>
              any damages or losses arising out of or in connection with any
              acts or omissions on your part or on the part of any third
              parties, including any loss of private keys or Secret Recovery
              Phrase, losses or theft of digital assets, malfunction or failure
              of any blockchain network, execution or settlement errors,
              configuration errors, connectivity failure, programming language
              errors, security breaches, weaknesses or bugs; and
            </li>
            <li>
              any other matters beyond the reasonable control of Desmos Labs
              arising out of or in connection with (i) your use of or
              interactions with our Platform or any products or services we
              offer, or (ii) your acquisition and use of DSM.
            </li>
          </ol>
          <p>
            Some countries or jurisdictions may not allow some of the
            disclaimers in this clause, in which case those disclaimers will not
            apply to you.
          </p>

          {/* Content moderation */}
          <h2
            id="content-moderation"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Content Moderation
          </h2>
          <p>
            We offer tools for each Mooncake user to report or hide
            inappropriate content. At this stage, Reports are handled by the
            Mooncake system automatically.
          </p>
          <p>
            Each community is free to configure its own rules and policies
            regarding content, except that any content that contravenes these
            Terms is deemed inappropriate. Moderators of each community are
            responsible for defining and enforcing content policies and
            guidelines applicable to their own community.
          </p>
          <p>
            If you come across any Mooncake user who acts repeatedly in breach
            of these Terms or applicable community policies or guidelines,
            please report to us by emailing{" "}
            <a href="mailto:support@desmos.network">support@desmos.network</a>.
          </p>
          <p>
            <strong>
              Due to the decentralised nature of Mooncake and Desmos, we, Desmos
              Labs and our officers and employees, are not able to remove any
              content posted by any Mooncake user.
            </strong>
          </p>

          {/* Conditions Precedent */}
          <h2
            id="conditions-precedent"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Changes to the Terms
          </h2>
          <p>
            Your access to and use of our Platform is conditional upon all of
            the following being satisfied at all times that you use our
            Platform:
          </p>
          <ol>
            <li>
              your representations and warranties under Clauses 7.1 and 7.2 are
              and remain true, accurate and complete;
            </li>
            <li>
              the performance of these Terms by us does not require any
              licences, permits or registrations (under securities laws or
              otherwise) not possessed by us; and
            </li>
            <li>
              the performance of these Terms by either party does not constitute
              any breach, default or violation of any applicable laws and
              regulations (including securities laws, financial services laws,
              anti-money-laundering laws, anti-terrorist and
              anti-terrorist-financing laws).
            </li>
          </ol>
          <p>
            Where one or more of the conditions precedent set out in Clause 6.1
            are not satisfied, we do not and cannot offer you access to or use
            of our Platform. We will, where it is technically feasible to do so,
            suspend or terminate your access to or use of our Platform (or
            certain parts or functionalities of our Platform).
          </p>

          {/* Representations and Warranties */}
          <h2
            id="representations-and-warranties"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Representations and Warranties
          </h2>
          <p>
            By using our Platform, you represent and warrant to us that, at all
            times that you use our Platform:
          </p>

          <ol>
            <li>you are of legal age in your jurisdiction of residence;</li>
            <li>
              you are not a citizen or resident in a sanctioned jurisdiction or
              territory (currently, Cuba, Iran, North Korea, Russia, Syria and
              Crimea, Donetsk and Luhansk of Ukraine);
            </li>
            <li>
              you have not been convicted of any money-laundering,
              terrorist-financing, trafficking in controlled substances (or
              similar crimes) at any domestic, military, foreign or
              international court;
            </li>
            <li>
              you are not the subject of any economic or trade sanctions
              administered or enforced by any governmental, regional or
              international authority;
            </li>
            <li>
              you are not on the Specially Designated Nationals and Blocked
              Persons List published by the Office of Foreign Assets Control of
              the United States Treasury Department (or other lists to similar
              effect in applicable jurisdictions), or any other list of
              prohibited or restricted parties of similar nature;
            </li>
            <li>
              any User Content you post or submit is not in breach of any of
              these Terms or applicable community rules, policies or guidelines;
              and
            </li>
            <li>
              your use of Mooncake is not in breach of the Acceptable Use Policy
              under Clause 4 of these Terms.
            </li>
          </ol>
          <p>By acquiring and using DSM, you represent and warrant that:</p>
          <ol>
            <li>
              you are experienced and sophisticated in using and evaluating
              blockchain networks, crypto tokens and related technologies, and
              you have conducted your own independent research, due diligence
              and analysis of Desmos network, and you enter into these Terms
              solely relying on your own independent research, due diligence and
              analysis; and
            </li>
            <li>
              the funds that you use in acquiring DSM are not derived from, nor
              otherwise represent the proceeds of, any activities done in
              violation or contravention of any applicable domestic, military,
              foreign or international laws, in particular any money-laundering,
              terrorist-financing, trafficking in controlled substances or any
              other crimes.
            </li>
          </ol>

          {/* Taxes and other obligations */}
          <h2
            id="taxes-and-obligations"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Taxes and other obligations
          </h2>
          <p>
            You are solely responsible for any and all taxes, duties and levies
            payable to any governmental authorities in connection with or
            arising out of acquiring, using or otherwise transacting in or with
            DSM.
          </p>
          <p>
            You are strongly encouraged to seek independent professional advice
            to understand your legal, tax or other obligations in connection
            with or arising out of acquiring, using or otherwise transacting in
            or with DSM. Desmos Labs (nor any of its holding company(ies),
            subsidiary(ies), affiliates, directors, officers, employees, agents
            and representatives) does not provide any advice in respect of your
            legal, tax or other obligations in connection with your use of our
            Platform.
          </p>

          {/* Beta services */}
          <h2
            id="beta-services"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Beta services
          </h2>
          <p>
            We may release products, services, functionalities or features that
            we are still developing, testing and evaluating (“
            <strong>Beta Services</strong>”). We may label these Beta Services
            with terms such as “beta”, “early access”, “trial” or any other
            words or phrases with similar meanings.
          </p>
          <p>
            By using any Beta Services, you acknowledge and agree that these
            Beta Services are under review and may not be reliable. Beta
            Services may break any time and any content or data you submit while
            using Beta Services may be lost or not retrievable.
          </p>

          {/* Termination */}
          <h2
            id="termination"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Termination
          </h2>
          <p>
            These Terms are effective unless and until terminated in accordance
            with this clause.
          </p>
          <p>
            We reserve the right to suspend or terminate your access to our
            Platform (or to certain parts or functionalities of our Platform),
            if we reasonably believe:
          </p>
          <ol>
            <li>you are in serious or repeated breach of these Terms;</li>
            <li>
              you are using the Platform in a manner that would cause a real
              risk of harm or loss to us, other users, or the public;
            </li>
            <li>
              we are requested to do so by government or regulatory authorities
              or as required under applicable laws, regulations or legal
              processes; or
            </li>
            <li>
              our provision of the Platform to you is no longer possible or
              viable.
            </li>
          </ol>
          <p>
            Termination of these Terms will not affect any rights, remedies,
            obligations or liabilities of the parties that have accrued up to
            the date of termination, including the right to claim damages in
            respect of any antecedent breaches.
          </p>
          <p>
            All provisions which by nature extend beyond the termination of
            these Terms will survive termination, including, without limitation,
            disclaimers and limitations of liability, governing law and dispute
            resolution mechanisms, and general provisions relating to the
            interpretation and operation of these Terms.
          </p>

          {/* Indemnity */}
          <h2
            id="indemnity"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Indemnity
          </h2>
          <p>
            Due to the decentralised and permissionless design of blockchain
            networks, any person may use Mooncake or any other products or
            services that we offer, and/or acquire and use DSM. By holding
            private keys, each DSM holder has full access to and control over
            his/her DSM, which Desmos Labs does not and is unable to interfere
            with.
          </p>
          <p>
            If we, Desmos Labs and its holding company(ies), subsidiary(ies),
            affiliates, directors, officers, employees, agents and
            representatives, suffer or incur any costs, claims and losses
            (including legal or other professional costs and expenses) in
            connection with or as a result of your use of Mooncake or any other
            products or services that we offer and/or use of DSM in breach of
            these Terms, you expressly agree to indemnify and keep us fully
            indemnified from and against all such costs, claims and losses.
          </p>

          {/* Force majeure */}
          <h2
            id="force-majeure"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Force majeure
          </h2>
          <p>
            Neither party will be in breach of these Terms or be liable for any
            delay in performing, or any failure to perform, any of its
            obligations under these Terms if such delay or failure result from
            events, circumstances or causes beyond its reasonable control. In
            such circumstances, the time for performance will be extended by a
            period equivalent to the period during which performance of the
            obligation has been delayed or failed to be performed.
          </p>
          <p>
            A force majeure event includes: an act of God, fire, flood, typhoon,
            storm, war, riot, civil unrest, act of terrorism, strike, industrial
            dispute, outbreak of epidemic or pandemic illness, failure of
            utility service or transportation, shortage and unavailability of
            energy or resources, and operation and action of and changes to the
            protocols of Supported Networks.
          </p>

          {/* General Provisions */}
          <h2
            id="general-povisions"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            General Provisions
          </h2>
          <p>
            Desmos Labs may modify these Terms of Use at any time, and will post
            the modified Terms of Use on this site. Any modification is
            effective immediately upon posting. Your continued use of our
            Platform will be conclusive evidence of your acceptance of the Terms
            of Use as modified.
          </p>
          <p>
            These Terms constitute the entire agreement between the parties, and
            supersede all prior or contemporaneous negotiations, discussions or
            records with respect to the subject matter hereof.
          </p>
          <p>
            If any provision of these Terms becomes invalid or unenforceable, it
            will be deemed modified (to the minimum extent necessary) to make it
            valid and enforceable, or where such modification is not possible,
            deemed deleted and will not affect the validity and enforceability
            of the remaining provisions.
          </p>
          <p>
            The failure of either party at any time to insist on the performance
            of, or to exercise a right or remedy under, any provision of these
            Terms is not a waiver of its right at any later time to insist on
            the performance of, or exercise a right or remedy under, that or any
            other provision of these Terms.
          </p>
          <p>
            A reference to a “person” includes a natural person, a corporation,
            or an unincorporated body (whether or not having a separate legal
            personality). A reference to “writing” or “written” includes fax,
            e-mail and instant messaging. A reference to one gender will include
            a reference to the other genders.
          </p>
          <p>
            Clause and schedule headings are for convenience only and do not
            affect the interpretation of the provisions of these Terms.
          </p>

          {/* Governing Law */}
          <h2
            id="governing-law"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Governing Law
          </h2>
          <p>
            These Terms and any dispute or claim arising out of or in connection
            with it or its subject matter or formation (including
            non-contractual disputes or claims) will be governed by and
            construed in accordance with the laws of the Hong Kong Special
            Administrative Region.
          </p>

          {/* Dispute Resolution */}
          <h2
            id="changes"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Dispute Resolution
          </h2>
          <p>
            Any dispute, controversy, difference or claim arising out of or
            relating to these Terms, including the existence, validity,
            interpretation, performance, breach or termination thereof, will be
            referred to and finally resolved by arbitration administered by the
            Hong Kong International Arbitration Centre (HKIAC) under the HKIAC
            Administered Arbitration Rules in force when the Notice of
            Arbitration is submitted.
          </p>
          <p>
            The law of this arbitration clause will be the laws of the Hong Kong
            Special Administrative Region. The seat of the arbitration will be
            Hong Kong. The number of arbitrators will be one. The arbitration
            proceedings will be conducted in English.
          </p>

          {/* Contact Us */}
          <h2
            id="contacts"
            className="py-[32px] text-2xl font-semibold leading-9"
          >
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms or our
            Platform, please contact us at info@desmos.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
