import "../styles/Duckweeds.css";
import Image from "next/image";

const duckweedsm2 =
  "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/duckweedsmall2_kpmuqa";
const duckweedmd =
  "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/duckweedmedium_qozes9";
const duckweedsm =
  "https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1739712659/duckweedsmall_b6zyy2";

const Duckweeds = () => {
  return (
    <>
      <Image
        className="duckWeedSm"
        alt="duckweed"
        src={duckweedsm}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedMd weedmd1"
        alt="duckweed"
        src={duckweedmd}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed1"
        alt="duckweed"
        src={duckweedsm}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed1"
        alt="duckweed"
        src={duckweedsm}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedMd weedmd2"
        alt="duckweed"
        src={duckweedmd}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed3"
        alt="duckweed"
        src={duckweedsm}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed4"
        alt="duckweed"
        src={duckweedsm2}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed5"
        alt="duckweed"
        src={duckweedsm2}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed2"
        alt="duckweed"
        src={duckweedsm}
        width={300}
        height={300}
      />
      <Image
        className="duckWeedSm weed6"
        alt="duckweed"
        src={duckweedsm2}
        width={300}
        height={300}
      />
    </>
  );
};

export default Duckweeds;
