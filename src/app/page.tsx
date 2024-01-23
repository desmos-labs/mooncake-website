import HomeContent from "@/app/components/HomeContent";
import MainLayout from "@/app/layouts/MainLayout";
import DefaultSEO from "@/app/seo";
import React from "react";

export const metadata = {
  ...DefaultSEO,
};

export default function Home() {
  return (
    <MainLayout background={true}>
      <HomeContent />
    </MainLayout>
  );
}
