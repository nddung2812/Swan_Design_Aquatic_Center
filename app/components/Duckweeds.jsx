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
      {/* Small floating elements with spinning animation */}
      <Image
        className="absolute top-0 left-0 w-5 h-12 object-contain z-10 animate-spin-slow opacity-60"
        alt="floating aquatic element"
        src={duckweedsm}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite",
        }}
      />

      {/* Medium floating elements */}
      <Image
        className="absolute -top-[10vh] left-[1vw] w-16 h-24 object-contain z-10 opacity-70"
        alt="floating aquatic element"
        src={duckweedmd}
        width={300}
        height={300}
        style={{
          animation: "float-gentle 400s linear infinite",
        }}
      />

      {/* Additional small elements positioned around the screen */}
      <Image
        className="absolute top-[20vh] left-[20vw] w-7 h-12 object-contain z-10 opacity-50"
        alt="floating aquatic element"
        src={duckweedsm}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 1s",
        }}
      />

      <Image
        className="absolute top-[35vh] right-[20vw] w-10 h-12 object-contain z-10 opacity-60 rotate-180"
        alt="floating aquatic element"
        src={duckweedsm}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 2s",
        }}
      />

      <Image
        className="absolute top-[30vh] right-[60vw] w-16 h-24 object-contain z-10 opacity-70"
        alt="floating aquatic element"
        src={duckweedmd}
        width={300}
        height={300}
        style={{
          animation: "float-gentle 400s linear infinite 1.5s",
        }}
      />

      <Image
        className="absolute top-[40vh] left-[30vw] w-4 h-12 object-contain z-10 opacity-40"
        alt="floating aquatic element"
        src={duckweedsm}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 3s",
        }}
      />

      <Image
        className="absolute top-[25vh] left-[70vw] w-6 h-12 object-contain z-10 opacity-50"
        alt="floating aquatic element"
        src={duckweedsm2}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 4s",
        }}
      />

      <Image
        className="absolute top-[60vh] left-[10vw] w-5 h-12 object-contain z-10 opacity-45"
        alt="floating aquatic element"
        src={duckweedsm2}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 5s",
        }}
      />

      <Image
        className="absolute top-[15vh] right-[30vw] w-7 h-12 object-contain z-10 opacity-55"
        alt="floating aquatic element"
        src={duckweedsm}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 6s",
        }}
      />

      <Image
        className="absolute top-[50vh] right-[10vw] w-6 h-12 object-contain z-10 opacity-40"
        alt="floating aquatic element"
        src={duckweedsm2}
        width={300}
        height={300}
        style={{
          animation: "float-and-spin 500s linear infinite 7s",
        }}
      />

      <style jsx>{`
        @keyframes float-and-spin {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(20vw) translateY(10vh) rotate(180deg);
          }
          50% {
            transform: translateX(20vw) translateY(20vh) rotate(180deg);
          }
          75% {
            transform: translateX(60vw) translateY(30vh) rotate(270deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(360deg);
          }
        }

        @keyframes float-gentle {
          0% {
            transform: translateX(10vw) translateY(23vh);
          }
          25% {
            transform: translateX(80vw) translateY(10vh);
          }
          50% {
            transform: translateX(20vw) translateY(40vh);
          }
          75% {
            transform: translateX(60vw) translateY(5vh);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Duckweeds;
