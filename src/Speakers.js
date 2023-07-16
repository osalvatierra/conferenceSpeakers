export function Speakers({ image, name, topic, children }) {
  return (
    <>
      <li>
        {children}
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </li>
      <li style={{ margin: "0 0 20px 70px" }}>{topic}</li>
    </>
  );
}
