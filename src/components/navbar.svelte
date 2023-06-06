<script>
  import '@vkea/pridecss/css/pride-lite.css';
  const LGBTQ = ['pride-bi', 'pride-trans', 'pride-quasar', 'pride-gay'];
  let randomLGBTQ = LGBTQ[Math.floor(Math.random() * LGBTQ.length)];
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl glass {randomLGBTQ} text-black" href="/">Gideon De Marcas</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Page 1</a></li>
      <li><a href="/">Page 2</a></li>
    </ul>
  </div>
</div>