import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getServiceById, getAllServiceIds } from "../../data/servicesData";
import ServiceContent from "./ServiceContent";
import "../../mockup2.css";

export async function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  return serviceIds.map((serviceId) => ({
    serviceId: serviceId,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceContent service={service} />
      <Footer />
    </>
  );
}
