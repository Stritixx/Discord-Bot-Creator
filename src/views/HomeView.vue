<template>
    <div class="ms__container">
        <div class="ms__blob__container">
            <div class="ms__blob"></div>
        </div>
        <div class="ms__header__text">
            <h1>Everything that your server needs <span>is here!</span></h1>
        </div>
        <div class="ms__header__description">
            <p>The easiest way to build your own Discord bot with custom commands/functions without any programming knowledge!</p>
        </div>
        <div class="ms__header__button__container">
            <vs-button type="transparent" active size="large" class="ms__get__started"> Get Started! </vs-button>
            <vs-button type="transparent" active size="large"> How it works? </vs-button>
        </div>
        <div class="ms__panel__container">
            <img src="../assets/panel.png" alt="" class="ms__panel">
        </div>
    </div>
</template>


<script>
    export default {
        name: 'HomeView',
    }
</script>



<style scoped>
.ms__container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}


.ms__blob__container {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    position: relative;
}



.ms__blob {
    width: 1000px;
    height: 600px;
    border-radius: 50%; 
    background: linear-gradient(55deg, #00ffea, #8400ff);
    filter: blur(50px);
    display: inline-block;
    position: absolute;
    top: -350px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.1;
    z-index: -1;
    pointer-events: none;
    clip-path: ellipse(100% 50% at 50% 100%);
}


.ms__header__text {
    color: rgba(255, 255, 255, 0.781);
    font-size: 50px;
    font-weight: 700;
    word-spacing: 3px;
    text-align: center;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -50px
}


.ms__header__text > h1 {
    width: 700px;
}



.ms__header__text > h1 > span {
    font-weight: bold;
    background: linear-gradient(90deg, #008cff, #8400ff, #003cff);
    background-size: 200% 200%; /* Powiększamy gradient */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientAnimation 5s linear infinite;
}



@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}



.ms__header__description {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}


.ms__header__description > p {
    width: 750px;
    font-size: 21px;
    color: rgba(255, 255, 255, 0.548);
    text-shadow: 0 5px 60px rgb(60, 94, 199);
}


.ms__header__button__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}



.ms__get__started {
    margin-right: 10px
}


.ms__panel__container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
}



.ms__panel {
    width: 700px;
    filter: blur(4px);
    border-radius: 17px;
}
</style>