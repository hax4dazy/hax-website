<script>
  import { base } from '$app/paths'
  const LGBTQ = ['pride--bi text-white', 'pride--trans text-black', 'pride--quasar text-white', 'pride--gay text-white'];
  let randomLGBTQ = LGBTQ[Math.floor(Math.random() * LGBTQ.length)];
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl {randomLGBTQ}" href="{base}">Gideon De Marcas</a>
  </div>
</div>