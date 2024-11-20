import Link from "next/link";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-black text-white flex justify-center items-center">
      <div id="blob"></div>
      <div id="blur"></div>
      <h1 data-value="SHUBHAM">SHUBHAM</h1>
      <div className="overlay-navigation">
        <nav role="navigation">
          <ul>
            <li><Link href="#home" data-content="The beginning">Home</Link></li>
            <li><Link href="#about" data-content="Curious?">About</Link></li>
            <li><Link href="/skills" data-content="I got game">Skills</Link></li>
            <li><Link href="#Works" data-content="Only the finest">Works</Link></li>
            <li><Link href="#Contact" data-content="Don't hesitate">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <section className="home">
        <div className="open-overlay">
          <span className="bar-top"></span>
          <span className="bar-middle"></span>
          <span className="bar-bottom"></span>
        </div>
      </section>
    </div>
  );
}