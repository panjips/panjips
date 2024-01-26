import Container from "@/components/container";
import Card from "@/components/card";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <Container className="bg-slate-950 flex-grow lg:pt-16">
        <div className="flex gap-2 items-end p-4">
          <h1 className="text-slate-100 font-bold text-3xl lg:text-4xl">
            All Project
          </h1>
          <Image
            width={32}
            height={32}
            src={"/images/flash.jpg"}
            alt="flash"
            className="size-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 content-between">
          <Card image={"/images/mockup-app.png"} title="Yogyakarta Tourism App">
            Navigate Jogja like a local with our detailed travel guide.
          </Card>
          <Card image={"/images/mockup-rent-car.png"} title="Rent n Ride">
            At Rent n Ride, we understand that every journey is unique. That's
            why we offer flexible rental options.
          </Card>
          <Card image={"/images/mockup-porto.png"} title="Portofolio Website">
            My personal website for recruiter get first informations, etc.
          </Card>
        </div>
      </Container>
    </>
  );
}
