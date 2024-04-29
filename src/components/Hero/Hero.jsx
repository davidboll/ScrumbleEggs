import styles from './Hero.module.css'

function Hero() {
    return (
      <>
      <section className="hero flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Scrum Guide{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your imagination
          into immersive reality!
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Learn Scrum
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
      </section>
      <section className={styles.container}>
        <h2>This is a test</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit accusamus, ea nulla eum vero sit consequuntur dolores temporibus provident. Quo voluptates consequatur repellat qui. Ipsam praesentium voluptatibus sunt illo soluta!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsa esse ratione laborum officiis ad nostrum voluptatem sed saepe! Possimus eius odit beatae neque asperiores. Aliquam veritatis reprehenderit ab laudantium.</p>
      </section>
      </>
    );
  }
  
  export default Hero;
  