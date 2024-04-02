import Form from "./Form";
//  <img
//           src="https://www.svgrepo.com/show/264578/easter-bunny-rabbit.svg"
//           alt="Egg"
//           style={{
//             width: "50px",
//             height: "50px",
//             cursor: "pointer",
//           }}
//         />
function Hero() {
  return (
    <div className="flex flex-col">
      <div>img</div>
      <h1>Publish your podcasts everywhere.</h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="grid grid-cols-4 w-full">
        <div>una cosa</div>
        <div>una cosa</div>
        <div>una cosa</div>
        <div>una cosa</div>
      </div>
      <div />
      <Form />
    </div>
  );
}

export default Hero;
