import Button from "@/components/button/button";
import Greeting from "@/components/home/greeting";
import Icons from "@/components/home/icons";
import profile from "../../public/img/profile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:flex items-center max-w-screen-xl mx-auto px-4">
      <div className="lg:w-1/2">
        <Greeting />
        <div className="flex items-center justify-center gap-10">
          <Link href={"/contact"}>
            <Button content={"Contact me"} />
          </Link>
          <a href="/CV_Adriel_Vazquez.pdf" target="_blank">
            <Button content={"Download my CV"} />
          </a>
        </div>
        <Icons />
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Image src={profile} width={960} height={924} alt="profile" className="w-[70%] h-auto rounded-full" />
      </div>
    </div>
  );
}
