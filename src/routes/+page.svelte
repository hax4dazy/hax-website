<script>
  //component imports
  import Footer from "../components/footer.svelte";
  import Navbar from "../components/navbar.svelte";
  import Logocard from "../components/logocard.svelte";
  import Picutre from "../components/picture.svelte";
  import Projects from "../components/projects.svelte";
  import Reviews from "../components/reviews.svelte";
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
    <Reviews/>
    <Projects/>
  </div>
</div>
<Footer />
