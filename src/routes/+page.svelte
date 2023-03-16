<script>
import Footer from '../components/footer.svelte'
import Card from '../components/card.svelte'
import Navbar from '../components/navbar.svelte'
</script>

<html data-theme="light"></html>
<div class='bg-gradient-to-r from-purple-500 to-pink-500 absolute h-screen w-screen -z-10'>
<Navbar/>
<div class="grid grid-cols-4 gap-4 h-14 mt-3">
  <Card/>
</div>
</div>
<Footer/>