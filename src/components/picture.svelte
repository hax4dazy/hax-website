<script>
    //I'm sorry slluxx
    import pfp1 from "../assets/1.jpeg";
    import pfp2 from "../assets/2.jpeg";
    import pfp3 from "../assets/3.jpeg";
    import pfp4 from "../assets/4.jpeg";
    import pfp5 from "../assets/5.jpeg";
    import pfp6 from "../assets/6.jpeg";
    import pfp7 from "../assets/7.jpeg";
    import pfp8 from "../assets/8.jpeg";
    import pfp9 from "../assets/9.jpeg";
    //const
    const images = [pfp1, pfp2, pfp3, pfp4, pfp5, pfp6, pfp7, pfp8, pfp9];
    //variables
    let randomIndex = Math.floor(Math.random() * images.length);
    let pfp = images[randomIndex];
</script>

<div class="avatar h-full">
    <div class="w-autorounded">
        <img class="rounded-box bg-base-100 shadow-xl" src="{pfp}" alt="hey its me! very cool person"/>
    </div>
</div>