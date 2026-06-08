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

<style>
    a {  
    color: #e8499f
    }
</style>

<div class="avatar h-full h-full">
    <div class="w-autorounded">
        <div class="card card-side card-compact bg-base-100 shadow-xl h-full">
            <figure><img class="rounded-box" src={pfp} alt="hey its me! very cool person"/></figure>
            <div class="card-body">
              <div class="flex flex-col">
                <div class="">
                    <a href="https://www.linkedin.com/in/gideon-de-marcas/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div class="">
                    <a href="https://github.com/hax4dazy" target="_blank" rel="noreferrer"><i class="fab fa-github-square fa-3x"></i></a>
                </div>
                <div class="">
                    <a href="https://www.youtube.com/@hax4dayz1" target="_blank" rel="noreferrer"><i class="fab fa-youtube-square fa-3x"></i></a>
                </div>
                <div class="">
                    <a href="#" data-contact="Z2lkZW9uQGdpZGVvbi5waW5r" data-subj="TGV0cyBnZXQgaW4gdG91Y2g="
                    onmouseover="this.href = 'mailto:' + atob(this.dataset.contact) + '?subject=' + atob(this.dataset.subj || '')"><i class="fas fa-envelope-square fa-3x"></i></a>
                </div>
                <div class="">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><i class="fab fa-google-plus-square fa-3x"></i></a>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>
