import Container from "@/components/container";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import IconBorder from "./icon";
import InputForm from "./input-form";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Container className="bg-slate-950 flex-grow lg:pt-16">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-12 content-around">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-slate-100 font-bold text-2xl lg:text-4xl">
                Get in touch with me
              </h1>
              <Image
                height={24}
                width={24}
                src={"/images/handshake-icon.png"}
                alt="HandShake"
                className="size-6 lg:size-9"
              />
            </div>
            <p className="text-slate-400 text-sm lg:text-base pt-2 lg:pt-4 max-w-md">
              I am very open to discussing all about technologies, collaboration
              of project, job opportunities, or just sharing an ideas. Glad to
              see you.
            </p>
            <h2 className="text-slate-100 font-semibold text-xl lg:text-2xl mt-8">
              Detail Contact
            </h2>
            <p className="text-slate-400 mt-2 text-sm lg:text-base">
              panjipusaka71@gmail.com
            </p>
            <h2 className="text-slate-100 font-semibold text-xl lg:text-2xl mt-8">
              Social Media
            </h2>
            <div className="flex gap-5 mt-3">
              <IconBorder>
                <Link href="https://www.instagram.com/paanjip/" target="_blank">
                  <FaInstagram
                    size={32}
                    className="text-slate-500 group-hover:text-slate-300 group-hover:ease-in group-hover:transition group-hover:delay-150"
                  />
                </Link>
              </IconBorder>
              <IconBorder>
                <Link
                  href="https://www.linkedin.com/in/panjipusaka/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={32}
                    className="text-slate-500 group-hover:text-slate-300 group-hover:ease-in group-hover:transition group-hover:delay-150"
                  />
                </Link>
              </IconBorder>
              <IconBorder>
                <Link href="https://github.com/panjips" target="_blank">
                  <FaGithub
                    size={32}
                    className="text-slate-500 group-hover:text-slate-300 group-hover:ease-in group-hover:transition group-hover:delay-150"
                  />
                </Link>
              </IconBorder>
            </div>
          </div>
          <div className=" mt-8 lg:mt-0 flex flex-col justify-between">
            <h3 className="text-slate-100 font-semibold text-xl lg:text-3xl">
              Send me a message
            </h3>
            <form
              action="https://formsubmit.co/206fdef22beb609df147c182423fd279"
              method="POST"
              className="mt-4"
            >
              <div className="flex gap-4 mb-4">
                <InputForm
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <InputForm
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <InputForm
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={4}
                placeholder="Message"
                className="rounded-md lg:rounded-xl text-xs lg:text-base md:text-sm mt-4 border text-slate-400 bg-slate-900 border-slate-800 focus:outline-none focus:text-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 w-full py-2 px-4 required"
              ></textarea>
              <button
                type="submit"
                className="mt-4 rounded-xl px-4 py-2 text-slate-200 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 font-medium text-sm lg:text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
