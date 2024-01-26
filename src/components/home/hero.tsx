import Container from "@/components/container";
import Button from "@/components/button";
import { Typed } from "./typed";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Container className="bg-slate-950 pt-4 pb-8 lg:pt-16">
        <div className="flex flex-wrap-reverse lg:justify-between">
          <div className="mt-4">
            <div className="lg:max-w-screen-sm">
              <h2 className="font-normal lg:text-2xl font-sans text-slate-300">
                Hello i'am
              </h2>
              <Typed />
              <p className="font-normal text-xs lg:text-base text-slate-400">
                I am a{" "}
                <span className="text-indigo-600 font-bold">
                  informatics student
                </span>
                , who currently interest with{" "}
                <span className="text-indigo-600 font-bold">
                  web development
                </span>{" "}
                and{" "}
                <span className="text-indigo-600 font-bold">
                  mobile development
                </span>{" "}
                especially{" "}
                <span className="text-indigo-600 font-bold">android</span>.
              </p>
            </div>
            <div>
              <Button
                className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 font-medium text-[8px] lg:text-sm"
                path={"/contact"}
              >
                Contact Me
              </Button>
              <Button
                className="ml-2 border-[1px] border-indigo-600  font-medium text-[8px] lg:text-sm"
                path=""
              >
                Curriculum Vitae
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/images/photo.jpeg"}
              alt="PhotoProfile"
              width={1000}
              height={1000}
              className="rounded-2xl w-32 md:w-48"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
