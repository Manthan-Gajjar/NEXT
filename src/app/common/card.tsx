import Image from "next/image";
import Link from "next/link";


interface CardProps {
  image: string;
  name: string;
  description: string;
  link: string;
}

const cardData: CardProps[] = [
  {
    image: "https://via.placeholder.com/300",
    name: "Card One",
    description: "This is the first card description.",
    link: "/card-one",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Card Two",
    description: "This is the second card description.",
    link: "/card-two",
  },
  {
    image: "https://via.placeholder.com/300",
    name: "Card Three",
    description: "This is the third card description.",
    link: "/card-three",
  },
];

const Card = ({ image, name, description, link }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 w-full md:w-1/2 lg:w-1/3">
      <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link href={link} className="mt-4 inline-block text-blue-500 font-semibold hover:underline">Read More</Link>
      </div>
    </div>
  );
};

export default function CardList() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}