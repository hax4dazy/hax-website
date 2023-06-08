<script>
  //component imports
  import Footer from "../components/footer.svelte";
  import Card from "../components/card.svelte";
  import Navbar from "../components/navbar.svelte";
  import CardNoButton from "../components/card-no-button.svelte";
  //image imports
  import logo from "../assets/gideon.pink.png";
  import tmp from "../assets/tmp.jpg";
  import deepsealogo from "../assets/deepsealogo.png";
  import site from "../assets/site.png";
  //I'm sorry slluxx
  import pfp1 from "../assets/1.jpeg";
  import pfp2 from "../assets/2.jpeg";
  import pfp3 from "../assets/3.jpeg";
  import pfp4 from "../assets/4.jpeg";
  import pfp5 from "../assets/5.jpeg";
  import pfp6 from "../assets/6.jpeg";
  import pfp7 from "../assets/7.jpeg";
  import pfp8 from "../assets/8.jpeg";
  import pfp9 from "../assets/9.jpeg";
  //const
  const images = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6, pfp7, pfp8, pfp9];
  //variables
  let egg = "egg"
  let randomIndex = Math.floor(Math.random() * images.length);
  let pfp = images[randomIndex];
  let ramble = "Hello! I'm a software developer, and I'm passionate about building things that make a difference. I'm currently working on a few projects, and I'm always looking for new opportunities. If you have any questions, feel free to reach out to me!";
  let review = "Gideon is a good developer and I like him 👍";
</script>

<Navbar />
<div class="container px-4 mx-auto">
  <div class="grid grid-cols-12 gap-4 mt-5 mx-auto">
    <div class="col-span-12 md:col-span-8">
      <div class="grid grid-cols-1">
        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img width="100%" height="100%" src={logo} alt="Gideon.pink logo" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Expect the unexpected</h2>
            <p>{ramble}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-4 order-first sm:order-last">
      <div class="avatar h-full">
        <div class="w-autorounded">
          <img
            class="rounded-box bg-base-100 shadow-xl"
            src="{pfp}"
            alt="hey its me! very cool person"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 mx-auto mt-3">
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <CardNoButton title="About Me" img={tmp} bio={review} />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <CardNoButton title="About Me" img={tmp} bio={review} />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <CardNoButton title="About Me" img={tmp} bio={review} />
      </div>
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <CardNoButton title="About Me" img={tmp} bio={review} />
      </div>
  </div>

  <div class="grid grid-cols-12 gap-4 mx-auto mt-3">
    <div class="col-span-12">
      <Card title="DeepSea" img={deepsealogo} href="https://github.com/Team-Neptune/DeepSea" bio="DeepSea is an AiO (All In One) Custom Firmware package for the Nintendo Switch. It is used by thousands of people and maintained by me!"/>
    </div>
    <div class="col-span-12">
      <Card title="Gideon.pink" img="{site}" href="https://git.gideon.pink/Hax4dayz/hax-website" bio="This website was fully coded (with some help from other sources) by me!"/>
    </div>
  </div>

  <div class='grid-cols-12 mt-3'>
    <div class="card w-96 bg-base-100 shadow-xl col-span-12">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
