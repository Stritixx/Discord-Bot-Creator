<template>
    <div class="ms__dashboard__stats__container">
        <div class="ms__blob"></div>
        <div class="ms__dashboard__stats__header">
            <h1>Dashboard</h1>
        </div>
        <div class="ms__dashboard__stats__box">
            <div class="ms__dashboard__stats__box__icon">
                <div class="ms__dashboard__stats__box__icon__wrapper" data-wrapper-color="purple">
                    <i class='bx bx-terminal'></i>
                </div>
            </div>
            <div class="ms__dashboard__stats__box__data">
                <div class="ms__dashboard__stats__box__data__title">
                    <h3>Added Commands</h3>
                </div>
                <div class="ms__dashboard__stats__box__data__value">
                    <p>11</p>
                </div>
            </div>
        </div>
        <div class="ms__dashboard__stats__box">
            <div class="ms__dashboard__stats__box__icon">
                <div class="ms__dashboard__stats__box__icon__wrapper" data-wrapper-color="blue">
                    <i class='bx bx-code-alt'></i>
                </div>
            </div>
            <div class="ms__dashboard__stats__box__data">
                <div class="ms__dashboard__stats__box__data__title">
                    <h3>Added Functions</h3>
                </div>
                <div class="ms__dashboard__stats__box__data__value">
                    <p>5</p>
                </div>
            </div>
        </div>
        <div class="ms__dashboard__stats__box">
            <div class="ms__dashboard__stats__box__icon">
                <div class="ms__dashboard__stats__box__icon__wrapper" data-wrapper-color="aqua">
                    <i class='bx bx-timer' ></i>
                </div>
            </div>
            <div class="ms__dashboard__stats__box__data">
                <div class="ms__dashboard__stats__box__data__title">
                    <h3>Work Time</h3>
                </div>
                <div class="ms__dashboard__stats__box__data__value">
                    <p>38 min</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'DashboardBoxes',
    }
</script>



<style scoped>
    .ms__dashboard__stats__container {
        width: 100%;
        padding: 0px 200px 0px 200px;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 150px;
        background-color: black;
        position: relative;
    }


    .ms__dashboard__stats__header {
        width: 100%;
        font-size: 40px;
        color: rgba(255, 255, 255, 0.781);
        font-weight: 700;
        word-spacing: 3px;
        margin-bottom: 70px;
    }



    .ms__blob {
        width: 1000px;
        height: 800px;
        border-radius: 50%; 
        background: linear-gradient(55deg, #00ffea, #8400ff);
        filter: blur(50px);
        display: inline-block;
        position: absolute;
        top: -750px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.1;
        z-index: 1;
        pointer-events: none;
        clip-path: ellipse(100% 50% at 50% 100%);
    }


    .ms__dashboard__stats__box {
        width: 32%;
        height: 200px;
        background-color: rgb(2, 2, 2);
        border-radius: 22px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
    }



    .ms__dashboard__stats__box__icon {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
    }


    .ms__dashboard__stats__box__icon__wrapper {
        width: 70px;
        height: 70px;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        color: white;

    }


    .ms__dashboard__stats__box__icon__wrapper[data-wrapper-color="purple"] {
        background-color: #5b3cc4;
        box-shadow: 0px 0px 17px 7px rgba(91, 60, 196, 1);
    }


    .ms__dashboard__stats__box__icon__wrapper[data-wrapper-color="blue"] {
        background-color: #3c50c4;
        box-shadow: 0px 0px 17px 7px #3c50c4;
    }


    .ms__dashboard__stats__box__icon__wrapper[data-wrapper-color="aqua"] {
        background-color: #3ca4c4;
        box-shadow: 0px 0px 17px 7px #3ca4c4;
    }


    .ms__dashboard__stats__box__data {
        width: 50%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 40px;
    }



    .ms__dashboard__stats__box__data__title {
        color: rgb(95, 95, 95);
        font-weight: 700;
        text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.13);
    }



    .ms__dashboard__stats__box__data__value {
        color: rgba(255, 255, 255, 0.781);
        font-weight: 500;
        font-size: 40px;
        text-shadow: 0px 0px 11px rgba(255, 255, 255, 0.8);
    }
    
</style>