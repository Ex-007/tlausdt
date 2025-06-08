<template>
  <div class="overall" id="about">
    <div class="innerSection">
      <div class="head">
        <h3>Functional Screen</h3>
      </div>
      <img src="/images/tlaHero.jpg" alt="">
      <img src="/images/second.jpg" alt="">
      
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
img {
  width: 300px;
  height: 300px;
  margin-top: 10px;
  border: 4px solid white;
  outline: 4px solid rgb(193, 108, 16);
}
.innerSection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
@media (max-width: 844px) {
  .innerSection {
    flex-direction: column;
    padding: 0 10px;
  }
  img{
    width: 100%;
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
button {
  background-color: rgb(193, 108, 16);
  color: white;
  width: 150px;
  height: 30px;
  border: none;
}
</style>
