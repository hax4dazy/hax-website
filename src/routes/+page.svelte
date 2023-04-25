<script>
  import Footer from '../components/footer.svelte'
  import Card from '../components/card.svelte'
  import Navbar from '../components/navbar.svelte'
  import CardNoButton from '../components/card-no-button.svelte'
  let imnumber = Math.floor(Math.random() * 8) + 1;
  let ramble = "I'm a software developer, and I'm passionate about building things that make a difference. I'm currently working on a few projects, and I'm always looking for new opportunities. If you have any questions, feel free to reach out to me!"
  let review = "Gideon is a good developer and I like him 👍"
</script>

<div class='bg-gradient-to-r from-purple-500 to-pink-500 absolute w-screen h-screen'>
  <Navbar/>
  <div class="grid grid-cols-12 gap-4 h-14 mt-3 ml-3 mr-3">
      <div class="col-span-8">
        <div class="grid grid-cols-1">
          <Card title="Welcome to my portfolio!" link="https://google.com" img="../src/assets/gideon.pink.png" bio="{ramble}" button="Check out my projects!"/>
        </div>
      </div>
    <div class="col-span-4">
      <div class="avatar">
        <div class="w-autorounded">
          <img class="rounded-box" src="../src/assets/{imnumber}.jpeg" alt="hey its me!"/>
        </div>
      </div>
    </div>
  </div>
  <div class="divider w-screen"></div> 
  <div class="grid grid-cols-12 gap-4 ml-3 mr-3">
    <div class="col-span-3">
      <CardNoButton title="About Me" img="../src/assets/tmp.jpg" bio="{review}"/>
    </div>
  </div>
</div>
<Footer/>