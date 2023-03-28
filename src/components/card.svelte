<script>
export let title;
export let bio;
export let button;
export let img;
</script>

<style>
frogs {
    /* From https://css.glass */
  background: rgba(179, 161, 161, 0.55);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.7px);
  -webkit-backdrop-filter: blur(14.7px);
  border: 1px solid rgba(179, 161, 161, 0.3);
}
</style>

<div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="{img}" alt="{title}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{bio}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{button}</button>
    </div>
  </div>
</div>