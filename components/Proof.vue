<template>
  <div class="overall" id="about">
    <div class="innerSection">

        <div class="head">
            <h3>Proof of Work</h3>
        </div>
        <div class="imagesSectionScreenshot">
            <img src="/images/tlaHero.jpg" alt="flash usdt interface">
            <img src="/images/tlaHero.jpg" alt="flash usdt interface">
            <img src="/images/tlaHero.jpg" alt="flash usdt interface">
            <img src="/images/tlaHero.jpg" alt="flash usdt interface">
         </div>
    </div>
  </div>
</template>

<style scoped>
.head{
  margin-top: 10px;
  color: rgb(193, 108, 16);
}
.innerSection {
  display: flex;
  padding: 10px;
  padding: 20px 0;
  background-color: rgb(233, 242, 249);
}
.innerSection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.imagesSectionScreenshot img{
    width: 90%;
    margin-left: 14px;
    margin-right: 10px;
    margin-top: 20px;
}
.imagesSectionScreenshot h3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: rgb(255, 255, 255);
    font-size: 30px;
}

img{
    border: 4px solid rgb(193, 108, 16);
    border-radius: 15px;
}

@media (max-width: 844px) {
  .innerSection {
    flex-direction: column;
    padding: 0 10px;
  }
  .textContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .textContent h3 {
    color: rgb(193, 108, 16);
  }
}
</style>
