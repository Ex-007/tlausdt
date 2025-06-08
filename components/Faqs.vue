<template>
  <div class="overall" id="about">
    <div class="innerSection">

        <div class="head">
            <h3>FAQs</h3>
        </div>
                 <div class="questionPalace">
            <div class="question">
                <h5>What are the benefits of using a USDT Flash</h5>
                <p>
                    A USDT flasher allows a rapid transcationsa nd increased liquidity. It ensures high security and anonymity making it a valuable tool for quick and efficient cryptocurrency trading.
                </p>
            </div>
            <div class="question">
                <h5>Is there an expiration date for the flashed value?</h5>
                <p>
                    Yes, each flash sent is valid for 190 days after the first transfer.
                </p>
            </div>
            <div class="question">
                <h5>Can it be used for P2P?</h5>
                <p>
                    Yes, it's certainly the most recommended practice, but you can also do bridges, swaps and transfer whatever you want.
                </p>
            </div>
            <div class="question">
                <h5>Is USDT flash Transferrable?</h5>
                <p>
                    Yes, you can transfer to any wallet using your preferred network. ERC20, BEP20 or TRC20.
                </p>
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


.questionPalace h3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: white;
    font-size: 23px;
}
.questionPalace{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
}
.question{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 340px;
    padding: 9px;
    border-radius: 20px;
    height: 200px;
}
.question h5{
    color: rgb(208, 169, 28);
    font-size: 16px;
    text-align-last: center;
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
