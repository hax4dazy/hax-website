<script>
    import Card from "../components/card.svelte";
    import deepsealogo from "../assets/deepsealogo.png";
    import site from "../assets/site.png";
    import poseidon from "../assets/poseidon.png";
    import korral from "../assets/korral.png";
    import youtube from "../assets/youtube.png";
</script>


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