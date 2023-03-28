<script>
  import Footer from '../components/footer.svelte'
  import Card from '../components/card.svelte'
  import Navbar from '../components/navbar.svelte'
</script>

<div class='bg-gradient-to-r from-purple-500 to-pink-500 absolute w-full h-full'>
  <Navbar/>
  <div class="grid grid-cols-12 gap-4 h-14 mt-3 ml-2 mr-2">
      <div class="col-span-8">
        <div class="grid grid-cols-1">
          <Card title="Welcome to my portfolio!" img="" bio="This is going to be placeholder text, I just need to write something long here so I cna test out how it look on the site. Keep ignoring this please" button="Check out my onlyfans!" />
        </div>
      </div>
    <div class="col-span-4">
      <Card title="IMG" img="" bio="This is the card that should house my picture. I might cycle these through some images just so every user gets another picture" button="REMOVE ME"/>
    </div>
  </div>
</div>
<Footer/>