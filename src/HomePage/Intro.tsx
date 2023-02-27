import "./Intro.css";

const Intro = () => {
  return (
    <div id="about" className="section_margin intro-content">
      <img
        className="bgImage"
        src={require("../assets/images/bannerImg.gif")}
      />
      <div className="herocontent">
        {/* <img src={require("../assets/images/memoji.png")} /> */}
        <h2>Hello World, I'm</h2>
        <div className="header">Vignesh Kannaa</div>
        <div className="intro-desc">Software Engineer | Machine Learning</div>
      </div>
    </div>
  );
};
export default Intro;
