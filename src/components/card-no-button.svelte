<script>
  export let title;
  export let bio;
  export let img;
  import tmp from "../assets/tmp.jpg";
</script>

<div class="card card-compact bg-base-100 shadow-xl w-fit">
  <figure class="max-w-sm">
    <img src={img} alt={title} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{bio}</p>
    <div class="card-actions justify-end" />
  </div>
</div>
