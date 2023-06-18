<script>
    import CardNoButton from "../components/card-no-button.svelte";
    import tmp from "../assets/tmp.jpg";
    let review = "Gideon is a good developer and I like him 👍";
</script>

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