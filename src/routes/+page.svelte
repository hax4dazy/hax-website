<script>
  import Footer from '../components/footer.svelte'
  import Card from '../components/card.svelte'
  import Navbar from '../components/navbar.svelte'
  import CardNoButton from '../components/card-no-button.svelte'
  let imnumber = Math.floor(Math.random() * 8) + 1;
  let ramble = "Hello! I'm a software developer, and I'm passionate about building things that make a difference. I'm currently working on a few projects, and I'm always looking for new opportunities. If you have any questions, feel free to reach out to me!"
  let review = "Gideon is a good developer and I like him 👍"
</script>


<div class='bg-gradient-to-r from-purple-500 to-pink-500 absolute'>
  <Navbar/>
  <div class="grid md:grid-cols-12 gap-4 mt-5 ml-3 mr-3">
      <div class="col-span-8">
        <div class="grid grid-cols-1">
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img width="100%" height="100%" src="../src/assets/gideon.pink.png" alt="Its me!" /></figure>
            <div class="card-body">
              <h2 class="card-title">Expect the unexpected</h2>
              <p>{ramble}</p>
            </div>
          </div>
        </div>
      </div>
    <div class="col-span-4">
      <div class="avatar">
        <div class="w-autorounded">
          <img class="rounded-box bg-base-100 shadow-xl" src="../src/assets/{imnumber}.jpeg" alt="hey its me!" object-position="center"/>
        </div>
      </div>
    </div>
  </div>

  <div class="grid xl:grid-cols-20 lg:grid-cols-12 md:grid-cols-2 gap-4 ml-3 mr-3 mt-3">
    <div class="lg:col-span-3">
      <CardNoButton title="About Me" img="../src/assets/tmp.jpg" bio="{review}"/>
    </div>
    <div class="lg:col-span-3">
      <CardNoButton title="About Me" img="../src/assets/tmp.jpg" bio="{review}"/>
    </div>
    <div class="lg:col-span-3">
      <CardNoButton title="About Me" img="../src/assets/tmp.jpg" bio="{review}"/>
    </div>
    <div class="lg:col-span-3">
      <CardNoButton title="About Me" img="../src/assets/tmp.jpg" bio="{review}"/>
    </div>
  </div>

  <div class="grid grid-rows-3 grid-flow-col gap-4 ml-3 mr-3 mt-5">
    <div class="col-span-2">
      <Card title='DeepSea' img='../src/assets/deepsealogo.png' bio='DeepSea is an AiO (All In One) Custom Firmware package for the Nintendo Switch. It is used by thousands of people and maintained by me!'/>
    </div>
    <div class="col-span-2">
      <Card title='Another one' img='tmp' bio='example card for random project'/>
    </div>
  </div>
  <Footer/>
</div>