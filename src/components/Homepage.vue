<template>
    <div class="main">
        <div class="front-row"></div>
        <div class="reseaux">
            <a target="_blank" href="https://twitter.com/Lilian_Gtr"><img class="twitter" src="../assets/twitter.png" alt="Twitter"></a>
            <a target="_blank" href="https://github.com/Lougos"><img class="github" src="../assets/github.png" alt="GitHub"></a>
            <a target="_blank" href="https://www.linkedin.com/in/lilian-gautier-3b637a159/"><img class="linkedin" src="../assets/linkedin.png" alt="LinkedIn"></a>
        </div>
        <div class="menu">
            <div class="title">
                <H1>Bienvenue sur mon Portfolio</H1>
            </div>
            <div class="choice">
                <div class="projet">
                    <a href="projet.html">Mes Projets</a>
                </div>
                <div class="contact">
                    <a href="propos.html">A Propos</a>
                </div>
            </div>
        </div>
        <div class="blanc">

        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .main{
        display: flex;
        flex-direction: row;
        height: 88%;
        width: 100%;
        background-color: none;
        .reseaux {
            display: flex;
            flex-direction: column-reverse;
            width: 10%;
            align-items: center;
            justify-content: center;
            height: 88vh;
            a{
                img {
                    width: 40px;
                    height: 40px;
                }
                .twitter:hover {
                    filter: invert(55%) sepia(78%) saturate(3079%) hue-rotate(162deg) brightness(96%) contrast(105%);
                }

                .linkedin:hover {
                    filter: invert(41%) sepia(15%) saturate(2569%) hue-rotate(156deg) brightness(91%) contrast(98%);
                }

                .github:hover {
                    filter: invert(22%) sepia(67%) saturate(7340%) hue-rotate(297deg) brightness(88%) contrast(127%);
                }
            }
        }
        .menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            height: 88vh;
            .title {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50%;
                h1 {
                    font: 40px 'Bebas';
                }
            }
            .choice{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30vw;
                a{
                    font: 20px 'Bebas';
                    letter-spacing: 2px;
                    color: black;
                    text-decoration: none;
                    display: inline-block;
                    position: relative;
                }
                a:after{
                    background: none repeat scroll 0 0 transparent;
                    top: 0;
                    bottom: 0;
                    content: "";
                    display: block;
                    height: 2px;
                    left: 50%;
                    position: absolute;
                    background:black;
                    transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    width: 0;
                }
                a:hover{
                    width: 100%; 
                    left: 0; 
                }
            }
        }
    }
</style>