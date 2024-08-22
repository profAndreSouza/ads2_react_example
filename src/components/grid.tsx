import Image from "next/image";

export function Grid() {
    return (
        <div className="grid grid-cols-3 gap-4 m-5 mt-10">
            <div className="bg-cyan-200">
            <Image src={"/img/1.jpg"} alt="Imagem 01" className="w-full" width={100} height={0} />
            <p>Card 1</p>
            </div>
            <div className="bg-cyan-200">
            <Image src={"/img/2.jpg"} alt="Imagem 02" className="w-full" width={100} height={0} />
            <p>Card 2</p>
            </div>
            <div className="bg-cyan-200">
            <Image src={"/img/3.jpg"} alt="Imagem 03" className="w-full" width={100} height={0} />
            <p>Card 3</p>
            </div>
        </div>
    );
}