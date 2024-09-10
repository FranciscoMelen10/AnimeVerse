import Image from "next/image";

function VoicesAutorsItem({ img, name, language }) {
    return (
        <section
            className="flex justify-start items-start flex-col min-h-[550px] w-[300px] gap-2 hover:scale-95 transition-all"
            data-aos="fade-up" data-aos-easing="ease-in"
        >
            <Image
                src={`${img}`}
                alt={`Imagen de ${name}`}
                loading="lazy"
                className="rounded-2xl object-cover h-[400px]"
                width={300}
                height={400}
            />
            <h1 className=" text-color_100 font-semibold text-[20px] bg-transparent text-ellipsis w-[300px] whitespace-nowrap overflow-hidden">
                {language}
            </h1>
            <h2 className=" text-color_100 text-[20px] bg-transparent text-ellipsis w-[300px] whitespace-nowrap overflow-hidden">
                {name}
            </h2>
        </section>
    );
}

export default VoicesAutorsItem;
