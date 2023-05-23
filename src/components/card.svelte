<script>
export let title;
export let bio;
export let button;
export let img;
export let link;
</script>

<div class="card card-side bg-base-100 shadow-xl">
  <figure><img class="lg:w-40 lg:h-40 md:w-30 md:h-30" src="{img}" alt="{title}"/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{bio}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{button}</button>
    </div>
  </div>
</div>