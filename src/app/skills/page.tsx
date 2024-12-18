export default function Skills() {
  return (
    <div id="skills">
      <div id="blob"></div>
      <div id="blur"></div>
      <h1 data-value="SHUBHAM">SHUBHAM</h1>
      <div className="overlay-navigation">
        <nav role="navigation">
          <ul>
            <li><a href="./" data-content="The beginning">Home</a></li>
            <li><a href="#about" data-content="Curious?">About</a></li>
            <li><a href="#skills" data-content="I got game">Skills</a></li>
            <li><a href="#Works" data-content="Only the finest">Works</a></li>
            <li><a href="https://shubham-tailor.github.io/Resume/" data-content="Click Me">Resume</a></li>
          </ul>
        </nav>
      </div>

      <section className="Skills">
        <div className="open-overlay">
          <span className="bar-top"></span>
          <span className="bar-middle"></span>
          <span className="bar-bottom"></span>
        </div>
      </section>
    </div>
  );
}