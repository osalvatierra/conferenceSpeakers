import { Form } from "./Form";
import { Speakers } from "./Speakers";

export default function SpeakerData({ data, quantity, setQuantity }) {
  return (
    <>
      <div>
        <header className="header">
          <h1>Conference Speaker List</h1>
        </header>
      </div>
      <div className="list">
        {" "}
        <ul>
          {data.slice(0, quantity).map((speaker, i) => (
            <Speakers
              image={speaker.image}
              name={speaker.name}
              topic={speaker.topic}
              key={i}
            ></Speakers>
          ))}
        </ul>
        <Form quantity={quantity} setQuantity={setQuantity} />
      </div>
    </>
  );
}
