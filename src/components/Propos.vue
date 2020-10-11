<template>

<div class="main">
        <div class="reseaux">
        <a target="_blank" href="https://twitter.com/Lilian_Gtr"><img class="twitter" src="../assets/twitter.png" alt="Twitter"></a>
        <a target="_blank" href="https://github.com/Lougos"><img class="github" src="../assets/github.png" alt="GitHub"></a>
        <a target="_blank" href="https://www.linkedin.com/in/lilian-gautier-3b637a159/"><img class="linkedin" src="../assets/linkedin.png" alt="LinkedIn"></a>
        </div>
        <div class="propos">
            <div class="titre">
                <h2>A propos de moi :</h2>
            </div>
            <div class="blabla">
                <h4>Etudiant à l'Institut de l'Internet et du Multimédia</h4>
                <small>Actuellement en année 3 pour obtenir en fin d'année un bachelor chef de projet multimédia spécialisation développement web</small>
            </div>

            <hr>
    
            <h3>Compétences</h3>
            <div class="pro">
                <img src="../assets/html.png" alt="HTML">
                <img src="../assets/css.png" alt="CSS">
                <img src="../assets/javascript.png" alt="JavaScript">
                <img src="../assets/angular.png" alt="Angular">
            </div>

            <h3>Logiciels</h3>
            <div class="logiciel">
                <div class="haut-logiciel">
                    <img src="../assets/githubColor.png" alt="GitHub">
                    <img src="../assets/filezilla.png" alt="Fillezilla">
                    <img src="../assets/gitkraken.png" alt="GitKraken">
                    <img src="../assets/visual.png" alt="Visual Studio Code">
                </div>
                <div class="mid-logiciel">
                    <img src="../assets/office.png" alt="Microsoft Office">
                    <img src="../assets/slack.png" alt="Slack">
                    <img src="../assets/trello.png" alt="Trello">
                    <img src="../assets/phpstorm.png" alt="PhpStorm">
                    <img src="../assets/photoshop.png" alt="photoshop">
                </div>
                <div class=""></div>
            </div>

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

        .propos {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 80%;
            height: 100%;
            .titre {
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                width: 60%;
                height: 10%;
                font: 30px;
                text-decoration: underline;
            }
            .blabla {
                margin-top: 2%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 50%;
                font: 15px;
                h4 {
                    margin-right: 20px;
                    font: 20px 'bebas';
                }
            }
            h3 {
                margin-top: 2%;
                margin-bottom: 1%;
                font: 30px 'bebas';
                text-decoration: underline;   
                margin-right: 52%;
            }
            img {
                width: 125px;
                height: 125px;
            }
            .pro {
                margin-top: 1%;
                display: flex;
                justify-content: space-evenly;
                width: 100%;
            }
            .logiciel {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                width: 100%;
                height: 40%;
                .haut-logiciel {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    width: 100%;
                }
                .mid-logiciel {
                    margin-top: 1%;
                    display: flex;
                    justify-content: space-evenly;
                    width: 100%;
                }
            }
        }

    }

</style>