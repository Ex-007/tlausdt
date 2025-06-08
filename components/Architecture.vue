<template>
  <div class="overall" id="about">
    <div class="innerSection">
        <div class="head">
            <h3>What We Do</h3>
        </div>
              <div class="whatWeDo">

            <!-- <h4>Don't be afraid to give a trial, It's always good to go for great</h4> -->
            <div class="tutorDiv">
                <img src="" alt="">
                <h3>I Don't Have a Laptop?</h3>
                <p>
                    We can send you any amount you want. Just let us know the amount you want and we will send it to you.  minimum of 5,000 usdt and maximum of 50,000 per day
                </p>
                <a href="https://t.me/tlafiles?start=I Don't Have a Laptop">Telegram</a>
            </div>

            <div class="tutorDiv">
                <img src="" alt="">
                <h3>Does it Work on Windows or Mac?</h3>
                <p>
                    TLA software works on both windows and mac. You can use it on any of the operating system.
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

.whatWeDo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
}
.whatWeDo>h3{
    color: white;
    font-size: 33px;
    margin-bottom: 10px;
}
.whatWeDo>h4{
    color: rgb(193, 108, 16);
    font-size: 20px;
    margin-bottom: 10px;
    text-align-last: center;
    padding: 0 0 0 5px;
}

.tutorDiv{
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

.tutorDiv h3{
    color:rgb(193, 108, 16);
    font-size: 20px;
}
.tutorDiv p{
    text-align-last: center;
}
.tutorDiv a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    background-color: rgb(193, 108, 16);
    color: white;
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
