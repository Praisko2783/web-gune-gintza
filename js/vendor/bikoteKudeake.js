// Variables para manejar el elemento que se arrastra y las columnas
let draggedItem = null;
let failedAttempts = 0;
let correctPlacements = 0;
const totalExpressions = 12; // Total de elementos

// Seleccionamos las expresiones y las columnas
const expressions = document.querySelectorAll('.expression');
const columns = document.querySelectorAll('.column');
const failedAttemptsDisplay = document.getElementById('failed-attempts');

const emaitza = document.getElementById('emaitzarena');
const azalpena = document.getElementById('azalpenarena');

// Crear un div para mostrar el mensaje final
const finalMessage = document.createElement('div');
finalMessage.id = 'final-message';
document.body.appendChild(finalMessage);

// Añadir una alerta para intento fallido
function showFailedAlert() {
    const flashMessage = document.createElement('div');
    flashMessage.classList.add('flash');
    flashMessage.innerText = 'Saiakera hutsala: Hori ez da adierazpen horren kutxa!';
    document.body.appendChild(flashMessage);

    // Mostrar la alerta por 2 segundos y luego eliminarla
    flashMessage.style.display = 'block';
    setTimeout(() => {
        flashMessage.remove();
    }, 2000);
}

// Función para comprobar si el ejercicio ha finalizado
function checkIfFinished() {
    if (correctPlacements === totalExpressions) {
        // Determinar el mensaje en función de los intentos fallidos
        let message = '';
        if (failedAttempts < 4) {
            message = 'Oso ongi! Bakarrik ' + failedAttempts +' huts';
        } else if (failedAttempts >= 4 && failedAttempts < 6) {
            message = 'Ongi!';
        } else {
            message = 'Gehiago ikasi behar da';
        }


        // Mostrar el mensaje final
        // finalMessage.textContent = message;
        // finalMessage.style.display = 'block';

        emaitza.innerHTML = message;
        azalpena.innerHTML = "<div style='text-align:left; padding-left:10px; padding-right:10px;'>"+
                                    "<p><strong>alert('Hello');</strong>--> JavaScriptek erabiltzen du leiho hegalari bat agerarazteko.</p>"+
                                    "<p><strong>display: flex;</strong>--> CSSek erabiltzen du kaxak malguki higitzeko.</p>"+
                                    "<p><strong>for(var i=0; i < 9; i++);</strong>--> JavaScripten begizta bat da. Zera esan nahi du: <strong>( var i=0; )</strong> i aldagaiak 0 balio du. <strong>( i < 9; )</strong> i aldagaiak 9 baino gutxiago balio duen bitartean, <strong>( i++ )</strong> i aldagaiari bateko balioa erantsi eta berriro irakurri. Bigarren bueltan i aldagaiak 1eko balioa izango du, hirugarrenean 2ko balioa... Horrela 9ko balioa hartu arte. Orduan begiztqatik atera eta kodea irakurtzen jarraituko du.</p>"+
                            "</div>";
        // Desactivar el arrastre de las expresiones
        disableDragging();
    }
}

// Función para deshabilitar el arrastre de todas las expresiones
function disableDragging() {
    expressions.forEach(expression => {
        // Deshabilitamos el atributo draggable
        expression.setAttribute('draggable', 'false');

        // Eliminamos los eventos de dragstart y dragend
        expression.removeEventListener('dragstart', dragStartHandler);
        expression.removeEventListener('dragend', dragEndHandler);
    });
}

// Manejadores de eventos dragstart y dragend, los definimos aquí para poder eliminarlos más tarde
function dragStartHandler() {
    draggedItem = this;
    setTimeout(() => {
        this.classList.add('dragging');
    }, 0);
}

function dragEndHandler() {
    setTimeout(() => {
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    }, 0);
}

// Añadimos los eventos para cada expresión arrastrable
expressions.forEach(expression => {
    expression.addEventListener('dragstart', dragStartHandler);
    expression.addEventListener('dragend', dragEndHandler);
});

// Añadimos los eventos para las columnas (soltar)
columns.forEach(column => {
    column.addEventListener('dragover', function (e) {
        e.preventDefault();  // Permite que el elemento pueda soltarse
    });

    column.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.classList.add('highlight');  // Resalta la columna al entrar
    });

    column.addEventListener('dragleave', function () {
        this.classList.remove('highlight');
    });

    column.addEventListener('drop', function () {
        this.classList.remove('highlight');
        const type = draggedItem.getAttribute('data-type');

        // Verificamos si el elemento suelto coincide con la columna
        if ((this.id === 'html-column' && type === 'html') ||
            (this.id === 'css-column' && type === 'css') ||
            (this.id === 'js-column' && type === 'js')) {
            // Solo se suelta si coincide con la columna
            if (!this.contains(draggedItem)) {
                this.appendChild(draggedItem);
                correctPlacements++;
                checkIfFinished(); // Comprobar si ha terminado el ejercicio
            }
        } else {
            // Intento fallido
            failedAttempts++;
            failedAttemptsDisplay.textContent = failedAttempts;  // Actualizar contador en pantalla
            showFailedAlert();  // Mostrar alerta temporal
        }
    });
});
