<script>
export let title;
export let bio;
//export let button;
export let img;
export let href;
</script>

<div class="card card-side bg-base-100 shadow-xl">
  <figure class="shrink-0"><img class="w-20" src="{img}" alt="{title}"/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{bio}</p>
    <div class="card-actions justify-end">
      <a class="btn btn-primary sm:align-middle" href="{href}" target="_blank" rel="noreferrer">Check out the project!</a>
    </div>
  </div>
</div>