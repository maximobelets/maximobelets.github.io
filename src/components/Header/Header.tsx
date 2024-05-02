import Image from "next/image";

import Photo from './assets/photo.png';

export const Header = () => {
    return (
        <header className="mt-[224px] flex justify-between mx-[160px]">
            <div>
                <h2 className="text-[64px] font-bold">
                    Hi there 👋
                </h2>
                <p className="text-5xl font-normal mt-[20px]">
                    My name is Maxim Obelets<br />
                    I'm a web developer
                </p>
            </div>
            <Image 
                src={Photo}
                width={300}
                height={300}
                alt="Picture of the author"
            />
        </header>
    )
}