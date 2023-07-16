import { useState } from "react";
import "./index.css";
import SpeakerData from "./SpeakerData";

const speakerList = [
  {
    id: 443215,
    name: "Peter",
    image: "https://i.pravatar.cc/48?u=118844",
    topic: "Astronomy",
  },
  {
    id: 143215,
    name: "Kartikeya",
    image: "https://i.pravatar.cc/48?u=1345844",
    topic: "Travel",
  },
  {
    id: 443215,
    name: "Jalapeno",
    image: "https://i.pravatar.cc/48?u=118114",
    topic: "Bitcoin",
  },
  {
    id: 143515,
    name: "Jose",
    image: "https://i.pravatar.cc/48?u=158114",
    topic: "Geography",
  },
  {
    id: 343215,
    name: "Philip",
    image: "https://i.pravatar.cc/48?u=614114",
    topic: "Real Estate",
  },
  {
    id: 343215,
    name: "Ray",
    image: "https://i.pravatar.cc/48?u=988114",
    topic: "Coffee",
  },
  {
    id: 64325,
    name: "Anna",
    image: "https://i.pravatar.cc/48?u=148154",
    topic: "Travel",
  },
  {
    id: 748888,
    name: "Alex",
    image: "https://i.pravatar.cc/48?u=387114",
    topic: "Software Engineering",
  },
  {
    id: 932235,
    name: "Patricia",
    image: "https://i.pravatar.cc/48?u=912114",
    topic: "Oil Painting",
  },
  {
    id: 59732,
    name: "Samantha",
    image: "https://i.pravatar.cc/48?u=188134",
    topic: "Atoms",
  },
  {
    id: 145378,
    name: "Nigel",
    image: "https://i.pravatar.cc/48?u=988114",
    topic: "Anatomy",
  },
  {
    id: 844999,
    name: "Josh",
    image: "https://i.pravatar.cc/48?u=987114",
    topic: "Chemistry",
  },
  {
    id: 44445,
    name: "Ulma",
    image: "https://i.pravatar.cc/48?u=419114",
    topic: "History",
  },
  {
    id: 1143415,
    name: "Fred",
    image: "https://i.pravatar.cc/48?u=31814",
    topic: "Ships",
  },
  {
    id: 923215,
    name: "Montgomery",
    image: "https://i.pravatar.cc/48?u=118114",
    topic: "Bitcoin",
  },
  {
    id: 14315,
    name: "Raymond",
    image: "https://i.pravatar.cc/48?u=511114",
    topic: "Ethics",
  },
  {
    id: 74325,
    name: "Nick",
    image: "https://i.pravatar.cc/48?u=197114",
    topic: "Sneakers",
  },
  {
    id: 945215,
    name: "Veronica",
    image: "https://i.pravatar.cc/48?u=118664",
    topic: "Teaching",
  },
  {
    id: 143290,
    name: "Jessica",
    image: "https://i.pravatar.cc/48?u=188134",
    topic: "Insurance",
  },
  {
    id: 33315,
    name: "Javier",
    image: "https://i.pravatar.cc/48?u=653114",
    topic: "Parenting",
  },
];

export default function App() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container">
      <SpeakerData
        data={speakerList}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
