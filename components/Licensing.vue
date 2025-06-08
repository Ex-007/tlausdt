<template>
  <div class="overall" id="Licensing">
    <div class="innerSection">
      <div class="getAccess" id="getAccess">
            <div class="access">
                <h1>Licensing Steps</h1>
                <p>Get access to USDT Flash by following the steps below</p>
            </div>
            <div class="steps">
                <div class="step">
                    <h1>Step 1</h1>
                    <p>Check the licenses below</p>
                </div>
                <div class="step">
                    <h1>Step 2</h1>
                    <p>Select the license that suits you</p>
                </div>
                <div class="step">
                    <h1>Step 3</h1>
                    <p>Purchase the license selected</p>
                </div>
                <div class="step">
                    <h1>Step 4</h1>
                    <p>Login and generate product key. <br> check your mail for the key</p>
                </div>
                <div class="step">
                    <h1>Step 5</h1>
                    <p>Set transcation and broadcast it. <br> Enjoy your USDT</p>
                </div>
            </div>
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


.access{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;

    margin-top: 10px;
}
.access h1{
    color: rgb(193, 108, 16);
    font-size: 26px;
    margin-bottom: 10px;
}
.access p{
    color: rgb(193, 108, 16);
    font-size: 20px;
    padding: 5px;
    margin-bottom: 10px;
}

.steps{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    border-left: 4px solid rgb(193, 108, 16);
    margin-left: 15px;
}
.step{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 320px;
    padding: 9px;
    border-radius: 20px;
    height: 150px;
}

.step p{
    font-size: 18px;
    text-align-last: center;
}

.step h1{
    color: rgb(193, 108, 16);
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
.step{
    font-size: 13px;
}
</style>
