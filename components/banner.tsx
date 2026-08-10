import Image from "next/image";

export function Banner( {kz}: {kz: boolean} ) {
  
  return (
    
    <img src={kz ? "/banner.jpeg" : "/bannerru.jpg"} alt="ҚАРА АЛТЫН. 10 ҚЫРКҮЙЕКТЕН БАСТАП БАРЛЫҚ КИНОТЕАТРДА"/>
  );
}