<template>
  <div class="overall" id="subscriptionsPackage">
    <div class="innerSection">
        <div class="head">
            <h3>Subscriptions</h3>
        </div>
        <div class="subscriptionsPackage">


            <!-- The plans -->

            <div class="trialsVersion">
                <h3>Test Version</h3>
                <p>
                    This is the trial Version of the software.
                </p>
                <p>
                    This Demo allows you to experience the reliability and functionality of our software before committing to the full Version.
                </p>
                <p>
                    This Demo comes with a One-time use license.
                </p>
                <p>
                    This Demo is limited to sending 3 USDT per day.
                </p>
                <a href="https://mega.nz/file/xMZwgagY#">Download</a>
            </div>
            <div class="trialVersionVideo">
                <h2>Test Video Tutorial</h2>
                <div class="videoHosted">
                    <iframe src="https://player.vimeo.com/video/1044686012?title=0&amp;
                        byline=0&amp;
                        portrait=0&amp;
                        badge=0&amp;
                        autopause=0&amp;
                        player_id=0&amp;
                        app_id=58479" 
                        width="300" 
                        height="300" 
                        frameborder="0" 
                        allow="fullscreen; 
                        picture-in-picture;"
                        
                        title="VID_20250107_151007_884">
                    </iframe>
                </div>
            </div>





            <div class="otherVersions">
                <div class="amountP">
                    <h2>
                        <sup>$</sup>250
                    </h2>
                </div>
                <p>
                    15,000 TETHER: You get 15000 USDT daily on the software
                </p>
                <p>
                    Validity: 24 hours
                </p>
                <a href="/checkout?price=144&return=15,000 USDT daily for 24 hours">Proceed</a>
            </div>

            <div class="otherVersions">
                <div class="amountP">
                    <h2>
                        <sup>$</sup>399
                    </h2>
                </div>
                <p>
                    10,000 TETHER: You get 10,000 USDT daily on the software
                </p>
                <p>
                    Validity: 60 Days
                </p>
                <a href="/checkout?price=222&return=5,000 USDT daily for 60 Days">Proceed</a>
            </div>

            <div class="otherVersions">
                <div class="amountP">
                    <h2>
                        <sup>$</sup>800
                    </h2>
                </div>
                <p>
                    50,000 TETHER: You get 50,000 USDT daily on the software
                </p>
                <p>
                    Validity: 60 Days
                </p>
                <a href="/checkout?price=322&return=10,000 USDT daily for 60 days">Proceed</a>
            </div>

            <div class="otherVersions">
                <div class="amountP">
                    <h2>
                        <sup>$</sup>2,000
                    </h2>
                </div>
                <p>
                    500,000 TETHER: You get 500,000 USDT daily on the software
                </p>
                <p>
                    Validity: 60 Days
                </p>
                <a href="/checkout?price=722&return='50,000 USDT daily for 60 Days'">Proceed</a>
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

.trialVersionVideo>h2{
    color: rgb(193, 108, 16);
}
.subscriptionsPackage{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
}
.overheader h2{
    color: rgb(255, 255, 255);
    font-size: 19px;
}

.trialsVersion{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    width: 340px;
    padding: 20px 0;
    border-radius: 20px;
    height: 350px;
    box-shadow: inset 10px 6px 50px rgba(0, 0, 0, 1);
}

.trialsVersion a{
    color: white;
    font-size: 20px;
    margin: 10px;
    border: 3px solid white;
    outline: 3px solid rgb(193, 108, 16);
    background-color: rgb(193, 108, 16);
    width: 180px;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    border-radius: 0 30px 30px 0;
}
.trialsVersion h3{
    color:rgb(193, 108, 16);
    font-size: 25px;
}
.trialsVersion p{
    text-align:center;
}
sup{
    padding: 0 3px 0 0;
}
.amountP{
    width: 200px;
    background-color: #2aaeda;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 30px 0 0 30px;
    border: 3px solid white;
    outline: 3px solid #2aaeda;
    color: white;
}

.otherVersions{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    width: 340px;
    padding: 9px;
    border-radius: 20px;
    height: 300px;
    box-shadow: inset 10px 6px 50px rgba(0, 0, 0, 1);
}

.otherVersions a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-radius: 0 30px 30px 0;
    border: 3px solid white;
    outline: 3px solid  rgb(193, 108, 16);
    font-size: 20px;
    background-color: rgb(193, 108, 16);
    color: white;
}
.otherVersions p{
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
