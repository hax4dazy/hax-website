<script>
  //component imports
  import Footer from "../components/footer.svelte";
  import Card from "../components/card.svelte";
  import Navbar from "../components/navbar.svelte";
  import CardNoButton from "../components/card-no-button.svelte";
  import Logocard from "../components/logocard.svelte";
  import Picutre from "../components/picture.svelte";
  //image imports
  import tmp from "../assets/tmp.jpg";
  import deepsealogo from "../assets/deepsealogo.png";
  import site from "../assets/site.png";
  import poseidon from "../assets/poseidon.png";
  import korral from "../assets/korral.png";
  import youtube from "../assets/youtube.png";
  //variables
  let egg = "egg"
  let review = "Gideon is a good developer and I like him 👍";
</script>

<div class="bg-gradient-to-r from-purple-500 to-pink-500">
  <Navbar />
  <div class="container px-4 mx-auto">
    <div class="grid grid-cols-12 gap-4 mt-5 mx-auto">
      <div class="col-span-12 md:col-span-8">
        <div class="grid grid-cols-1">
          <Logocard/>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 order-first sm:order-last">
        <Picutre/>
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
        <Card title="Gideon.pink" img="{site}" href="https://git.gideon.pink/Hax4dayz/hax-website" bio="This website was fully coded (with some help from other sources) by me!"/>
      </div>
      <div class="col-span-12">
        <Card title="DeepSea" img={deepsealogo} href="https://github.com/Team-Neptune/DeepSea" bio="DeepSea is an AiO (All In One) Custom Firmware package for the Nintendo Switch. It is used by thousands of people and maintained by me!"/>
      </div>
      <div class="col-span-12">
        <Card title="Poseidon" img="{poseidon}" href="https://github.com/Team-Neptune/poseidon" bio="This is a discord bot written in Python with Pycord used in the official Team Neptune Discord server!"/>
      </div>
      <div class="col-span-12">
        <Card title="Korral" img="{korral}" href="https://github.com/Team-Neptune/Korral-JS" bio="This is the now defunct Discord bot for the official Team Neptune Discord server written entirely in Javascript!"/>
      </div>
      <div class="col-span-12">
        <Card title="Youtube-PY" img="{youtube}" href="https://github.com/hax4dazy/Youtube-PY" bio="Youtube-PY is an YouTube video downloader made using Python and YT-DLP!"/>
      </div>
    </div>
  </div>
</div>
<Footer />
