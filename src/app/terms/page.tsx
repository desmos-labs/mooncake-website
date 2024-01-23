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
          <h1 className="pb-[32px] text-2xl font-semibold leading-9 text-neutral-900 md:text-4xl">
            Terms of Service
          </h1>
          <p className="pb-4">
            The following terms and conditions govern your access to and use of
            the Mooncake application, and any related content, products, and
            services offered by Desmos Labs Limited (collectively, the “
            <strong className="text-neutral-900">Platform</strong>
            ”).
            <strong className="text-neutral-900">
              Please read these terms and conditions carefully before using our
              Platform.
            </strong>
          </p>
          <p className="pb-4">
            The Platform is operated by Desmos Labs Limited, a company
            incorporated in Hong Kong with company registration number 3210522,
            having its registered office at Flat 3B, Tontex Industrial Building,
            2-4 Sheung Hei Street, San Po Kong, Kowloon, Hong Kong (“
            <strong className="text-neutral-900">Desmos Labs</strong>
            ”, “we” or “us”). Users of our services are referred to as “
            <strong className="text-neutral-900">users</strong>” or “you”.
          </p>
          <p>
            By using our Platform, you agree to be legally bound by these terms
            and conditions, as they may be modified or supplemented from time to
            time (these “<strong className="text-neutral-900">Terms</strong>
            ”). If you are accessing or using our Platform as a representative
            of an organization, you are agreeing to these Terms on their behalf.
            Desmos Labs and users are referred to as “parties” in these Terms.
          </p>

          {/* Our Platform */}
          <h2
            id="platform"
            className="py-[32px] text-sm font-semibold leading-9 text-neutral-900 md:text-xl"
          >
            Our Platform
          </h2>
          <p>
            Mooncake is an application that seamlessly integrates the Desmos
            Blockchain to provide users with decentralized profiles, connections
            (relationships between users), and assets (NFTs, tokens) granting
            them total and complete ownership over them.
          </p>
          <p>
            Mooncake does not collect your personal data (such as your email
            address or your mobile phone number) when you create your Mooncake
            profile or when you use or interact with Mooncake. You are
            completely free to submit any information about yourself. Please
            refer to our Privacy Policy for details on how we handle any
            personal data we receive from you.
          </p>
          {/* Add the rest of the content similarly */}

          {/* Changes to the Terms */}
          <h1
            id="changes"
            className="py-[32px] text-sm font-semibold leading-9 text-neutral-900 md:text-xl"
          >
            Changes to the Terms
          </h1>
          <p>
            We may revise these Terms from time to time in our sole discretion.
            All changes are effective immediately when we post them, and apply
            to all access to and use of our Platform thereafter. Your continued
            use of our Platform following the posting of revised Terms means
            that you accept and agree to the changes.
          </p>

          {/* Contact Us */}
          <h1
            id="contacts"
            className="py-[32px] text-sm font-semibold leading-9 text-neutral-900 md:text-xl"
          >
            Contact Us
          </h1>
          <p>
            If you have any questions or concerns about these Terms or our
            Platform, please contact us at info@desmos.com.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
