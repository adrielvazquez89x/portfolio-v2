import html5 from '../../../public/img/icons/html.png';
import css3 from '../../../public/img/icons/css.png';
import JS from '../../../public/img/icons/js.png';
import TS from '../../../public/img/icons/ts.png';
import react from '../../../public/img/icons/react.png';
import sass from '../../../public/img/icons/sass.png';
import cpp from '../../../public/img/icons/cpp.png';
import cSharp from '../../../public/img/icons/csharp.png';
import dotnet from '../../../public/img/icons/dotnet.png';
import github from '../../../public/img/icons/github.png';
import Image from 'next/image';

export default function Icons() {
    return (
        <div className='flex flex-wrap justify-center gap-2 my-8'>
            <Image src={html5} width={32} height={32} className='tm' alt="" />
            <Image src={css3} width={32} height={32} className='tm' alt="" />
            <Image src={JS} width={32} height={32} className='tm' alt="" />
            <Image src={TS} width={32} height={32} className='tm' alt="" />
            <Image src={react} width={32} height={32} className='tm' alt="" />
            <Image src={sass} width={32} height={32} className='tm' alt="" />
            <Image src={cpp} width={32} height={32} className='tm' alt="" />
            <Image src={cSharp} width={32} height={32} className='tm' alt="" />
            <Image src={dotnet} width={32} height={32} className='tm' alt="" />
            <Image src={github} width={32} height={32} className='tm' alt="" />
        </div>
    );
}
