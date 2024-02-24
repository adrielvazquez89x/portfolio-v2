import Button from "@/components/button/button";
import Greeting from "@/components/home/greeting";
import Icons from "@/components/home/icons";
import profile from "../../public/img/profile.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="dark text-foreground bg-background">

      <div>
        <Greeting />
        <div className='flex items-center justify-center gap-10'>
          <Link href={'#'}>
            <Button text={'Contact me'} />
          </Link>
          <Link href={'#'}>
            <Button text={'Download my CV'} />
          </Link>
        </div>
        <Icons />

      </div>
      <div className='flex justify-center'>
        <Image src={profile} width={960} height={924} alt='profile' className="w-[70%] h-auto rounded-full" />
      </div>

    </main>
  );
}
