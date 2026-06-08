<script>
    import CardNoButton from "../components/card-no-button.svelte";
    import tmp from "../assets/tmp.jpg";
    import slluxx from "../assets/slluxx.png";
    import danielM from "../assets/danielM.jpeg";
    import riley from "../assets/ri.jpeg";
    import kim from "../assets/AvatarKim.png"
    let yourimagehere = "Contact me and have your review of me posted here!"
    let riley_review = "Gideon is a good developer and I like him 👍";
    let slluxx_review = "Meet my friend Gideon, a fascinating blend of intellect and occasional cluelessness. They pour their heart and soul into everything they do, and that dedication shines through in their results.";
    let danielM_review = "Gideon is een bevlogen IT professional, hij zet netwerken op voor huishoudens en bedrijven, weet raad met elk computer probleem en geen besturingssysteem is hem vreemd, van Apple IOS tot android of Windows. Heb je een probleem, vraag het Gideon en hij lost het op!";
    let kim_review = "Gideon is een hardwerkende en betrouwbare collega. Hij beschikt over goede kennis van de Microsoft 365-omgeving en heeft o.a. ervaring met ServiceNow en Topdesk. Daarnaast werkt hij prettig samen met collega’s en levert hij een actieve bijdrage aan een positieve teamdynamiek. Zijn ticketregistratie en -afhandeling zijn zorgvuldig en altijd up-to-date, wat zorgt voor duidelijkheid en continuïteit in het werk. Kortom, een waardevolle professional waarop je kunt bouwen."
</script>

<div class="grid grid-cols-12 gap-4 mx-auto mt-3">
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <CardNoButton title="Kimberly H" img={kim} bio={kim_review} />
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <CardNoButton title="Daniel M" img={danielM} bio={danielM_review} />
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <CardNoButton title="Riley R" img={riley} bio={riley_review} />
    </div>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
      <CardNoButton title="Your review here!" img={tmp} bio={yourimagehere} />
    </div>
</div>
