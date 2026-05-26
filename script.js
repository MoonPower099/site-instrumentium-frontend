// Instrumentos
const instrumentos = document.querySelectorAll(".instrument-card");

let audioAtual = null;

instrumentos.forEach((instrumento) => {

    instrumento.addEventListener("click", () => {

        // Áudio do instrumento
        const audio = instrumento.querySelector("audio");

        if(audio) {

            if(audioAtual === audio && !audio.paused) {

                audio.pause();

                return;

            }

            if(audioAtual && audioAtual !== audio) {

                audioAtual.pause();
                audioAtual.currentTime = 0;

            }

            audio.play();

            audioAtual = audio;

        }


        // Brilho dourado
        instrumento.style.boxShadow = "0 0 25px #D4AF37";

        setTimeout(() => {

            instrumento.style.boxShadow = "";

        }, 300);

    });

});


// Formulário
const formulario = document.getElementById("form-contato");
const mensagem = document.getElementById("mensagem-envio");

if(formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        mensagem.textContent = "Mensagem enviada com sucesso!";
        mensagem.style.color = "#D4AF37";

        formulario.reset();

    });

}


// Mostrar Cards
const cards = document.querySelectorAll(".instrument-card");

function mostrarCards() {

    cards.forEach((card) => {

        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100) {

            card.classList.add("aparecer");

        }

    });

}

window.addEventListener("scroll", mostrarCards);

mostrarCards();
