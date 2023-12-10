import "./meteors.scss";

/* This meteor effect was adapted from Manu Arora's - https://manuarora.in - https://manuarora.in */

export const Meteors = ({ number }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <div>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={"meteor-effect animate-meteor-effect absolute"}
          style={{
            top: 290,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
