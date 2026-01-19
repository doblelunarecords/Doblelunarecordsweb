// --- VECTORES DE LA MÁQUINA (EXACTOS) ---
const machineTemplate = `
<div class="machine-card" id="main-card">
    <div class="face face-front" id="machine-wrapper">
        <svg viewBox="0 0 768 1000" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <rect x="30" y="40" width="708" height="920" fill="#8B5E34" />
            <rect x="50" y="60" width="668" height="880" fill="#E2E0DC" />
            <path d="M115 960 H155 Q155 980 135 980 H115 Q115 960 115 960Z" fill="#0D0D0D"/>
            <path d="M615 960 H655 Q655 980 635 980 H615 Q615 960 615 960Z" fill="#0D0D0D"/>
            <g transform="translate(0, -20)">
                <g transform="translate(230, 280)"> 
                    <g class="reel-anim"><circle r="150" fill="#C8C8C8" /><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(0)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(90)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(180)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(270)"/><circle r="45" fill="#E2E0DC" /><circle r="12" fill="#050505" /><circle cx="18" cy="-18" r="6" fill="#050505" /><circle cx="-3" cy="-3" r="3" fill="#FFFFFF" /></g>
                </g>
                <g transform="translate(538, 280)">
                    <g class="reel-anim"><circle r="150" fill="#C8C8C8" /><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(0)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(90)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(180)"/><path d="M 0 -55 L 35 -135 L -35 -135 Z" fill="#050505" transform="rotate(270)"/><circle r="45" fill="#E2E0DC" /><circle r="12" fill="#050505" /><circle cx="18" cy="-18" r="6" fill="#050505" /><circle cx="-3" cy="-3" r="3" fill="#FFFFFF" /></g>
                </g>
            </g>
            <rect x="50" y="445" width="668" height="160" fill="#7E8184" />
            <path d="M170 420 L 240 480 L 530 480 L 600 450" stroke="#000000" stroke-width="3" fill="none"/>
            <g transform="translate(250, 455)">
                <rect x="0" y="0" width="220" height="120" fill="#2F2F2F" />
                <rect x="5" y="5" width="210" height="105" fill="#C9242B" />
                <text x="110" y="50" text-anchor="middle" fill="white" font-size="18" font-family="Arial Black" font-weight="900" style="text-transform:uppercase;" class="svg-editable">Doble Luna</text>
                <text x="110" y="80" text-anchor="middle" fill="white" font-size="18" font-family="Arial Black" font-weight="900" style="text-transform:uppercase;" class="svg-editable">Records</text>
                <path d="M5 110 L215 110 L210 115 L10 115 Z" fill="#A0A2A4" />
            </g>
            <circle cx="235" cy="485" r="18" fill="#C8C8C8" />
            <circle cx="535" cy="520" r="28" fill="#FFFFFF" stroke="#171717" stroke-width="6"/>
            <path d="M575 470 L630 470 L650 460" stroke="#171717" stroke-width="8" stroke-linecap="round" fill="none" />
            <rect x="50" y="605" width="668" height="310" fill="#080808" />
            <g id="speed-btn-group" style="cursor:pointer">
                <text x="110" y="625" text-anchor="middle" fill="#555" font-size="9" font-weight="bold" style="pointer-events:none; text-transform:uppercase;">tape speed</text>
                <circle id="speed-btn" cx="110" cy="640" r="11" fill="#D9D9D9" />
            </g>
            <circle cx="150" cy="640" r="11" fill="#D9D9D9" /><circle cx="220" cy="640" r="11" fill="#D9D9D9" /><circle cx="320" cy="650" r="11" fill="#D9D9D9" /><circle cx="400" cy="650" r="11" fill="#D9D9D9" /><circle cx="480" cy="650" r="11" fill="#D9D9D9" />
            <g transform="translate(545, 625)" id="btn-play">
                <rect x="0" y="0" width="155" height="45" fill="#7E8184" rx="4" />
                <rect x="10" y="8" width="28" height="28" fill="#C9242B" rx="2" id="btn-play-indicator" />
                <rect x="45" y="8" width="28" height="28" fill="#171717" rx="2" stroke="#5E6164" stroke-width="1" />
                <rect x="80" y="8" width="28" height="28" fill="#171717" rx="2" stroke="#5E6164" stroke-width="1" />
                <rect x="115" y="8" width="28" height="28" fill="#171717" rx="2" stroke="#5E6164" stroke-width="1" />
            </g>
            <g transform="translate(70, 690)">
                <g>
                    <rect width="300" height="100" fill="#3E3E3E" rx="4"/><rect x="10" y="10" width="280" height="80" fill="#171717" />
                    <path d="M40 70 Q 150 20 260 70" stroke="#7E8184" stroke-width="2" fill="none" />
                    <path d="M230 55 L235 48 M245 60 L250 53 M260 70 L265 63" stroke="#C9242B" stroke-width="3" fill="none" />
                    <g id="needle-left-group" class="needle-group"><line x1="150" y1="100" x2="150" y2="25" stroke="#FFFFFF" stroke-width="2.5" /></g>
                    <circle cx="150" cy="100" r="5" fill="#C9242B" />
                </g>
                <g transform="translate(328, 0)">
                    <rect width="300" height="100" fill="#3E3E3E" rx="4"/><rect x="10" y="10" width="280" height="80" fill="#171717" />
                    <path d="M40 70 Q 150 20 260 70" stroke="#7E8184" stroke-width="2" fill="none" />
                    <path d="M230 55 L235 48 M245 60 L250 53 M260 70 L265 63" stroke="#C9242B" stroke-width="3" fill="none" />
                    <g id="needle-right-group" class="needle-group"><line x1="150" y1="100" x2="150" y2="25" stroke="#FFFFFF" stroke-width="2.5" /></g>
                    <circle cx="150" cy="100" r="5" fill="#C9242B" />
                </g>
            </g>
            <g fill="#D9D9D9"><circle cx="100" cy="850" r="12" /><circle cx="140" cy="850" r="12" /><circle cx="250" cy="850" r="25" /><circle cx="370" cy="850" r="25" /><circle cx="450" cy="835" r="8" /><circle cx="450" cy="865" r="8" /><circle cx="530" cy="850" r="25" /><circle cx="620" cy="850" r="18" /><circle cx="690" cy="850" r="12" /></g>
        </svg>
    </div>

    <div class="face face-back">
        <svg viewBox="0 0 768 1000" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="708" height="920" fill="#8B5E34" />
            <rect x="55" y="65" width="658" height="870" fill="#1a1a1a" rx="4" />
            <circle cx="80" cy="90" r="6" fill="#333" stroke="#444" stroke-width="1" />
            <circle cx="688" cy="90" r="6" fill="#333" stroke="#444" stroke-width="1" />
            <circle cx="80" cy="910" r="6" fill="#333" stroke="#444" stroke-width="1" />
            <circle cx="688" cy="910" r="6" fill="#333" stroke="#444" stroke-width="1" />
            <g transform="translate(100, 140)">
                <rect width="568" height="5" fill="#0a0a0a" />
                <rect y="20" width="568" height="5" fill="#0a0a0a" />
                <rect y="40" width="568" height="5" fill="#0a0a0a" />
            </g>
            <g id="services-title-group">
                <rect id="services-bg" x="220" y="230" width="328" height="70" fill="#000" stroke="#C9242B" stroke-width="2" />
                <text id="services-title-text" x="384" y="275" text-anchor="middle" fill="#C9242B" font-family="Arial Black" font-size="28" class="svg-editable">SERVICIOS</text>
            </g>
            <g transform="translate(130, 380)" id="services-list-back">
                <text y="0" class="service-item-back svg-editable">01. GRABACIÓN</text>
                <text y="40" class="service-item-back svg-editable">02. PRODUCCIÓN</text>
                <text y="80" class="service-item-back svg-editable">03. POST PRODUCCIÓN DE AUDIO</text>
                <text y="120" class="service-item-back svg-editable">04. MÚSICA PARA CINE Y MEDIOS AUDIOVISUALES</text>
                <text y="160" class="service-item-back svg-editable">05. DISEÑO SONORO</text>
                <text y="200" class="service-item-back svg-editable">06. POST PRODUCCIÓN DE AUDIO PARA CINE Y MEDIO AUDIOVIUSALES</text>
                <text y="240" class="service-item-back svg-editable">07. IDENTIDAD SONORA</text>
                <text y="280" class="service-item-back svg-editable">08. DIRECCIÓN DE PROYECTOSG</text>
                <text y="320" class="service-item-back svg-editable">09. ASESORAMIENTO </text>
                <text y="360" class="service-item-back svg-editable">10. CLASES </text>
            </g>
            // BUSCA ESTO EN TU layout.js Y DÉJALO ASÍ:
<g transform="translate(480, 740)" onclick="toggleManual()" style="cursor:pointer">
    <rect width="180" height="40" fill="#C9242B" rx="20" />
    <text x="90" y="25" text-anchor="middle" fill="white" font-family="Arial Black" font-size="11" class="svg-editable">VER DETALLES</text>
</g>
            <g transform="translate(130, 800)">
                <circle cx="40" cy="40" r="30" fill="#000" stroke="#333" stroke-width="3" />
                <text x="40" y="90" text-anchor="middle" fill="#555" font-size="12">INPUT L</text>
                <circle cx="140" cy="40" r="30" fill="#000" stroke="#333" stroke-width="3" />
                <text x="140" y="90" text-anchor="middle" fill="#555" font-size="12">INPUT R</text>
                <g transform="translate(400, 10)" onclick="openModal()" style="cursor:pointer">
                    <rect width="130" height="60" fill="#000" stroke="#333" stroke-width="2" />
                    <text x="65" y="35" text-anchor="middle" fill="#444" font-size="11" font-family="Arial Black">AC POWER</text>
                </g>
                <g id="btn-add-cat" style="display:none; cursor:pointer" onclick="addNewService()">
                    <rect x="300" y="-100" width="140" height="40" fill="#C9242B" rx="5" />
                    <text x="370" y="-75" text-anchor="middle" fill="white" font-size="10" font-family="Arial Black">+ CATEGORIA</text>
                </g>
            </g>
            <text x="384" y="910" text-anchor="middle" fill="#333" font-size="13" font-family="Arial Black">DESIGNED BY DOBLE LUNA RECORDS • 2026</text>
        </svg>
    </div>
</div>
`;

// --- LÓGICA DE INYECCIÓN Y FUNCIONAMIENTO ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectar la máquina en el contenedor
    const container = document.getElementById('machine-container');
    if (container) {
        container.innerHTML = machineTemplate;
    }

    // 2. Vincular elementos del DOM (ya inyectados)
    const btnServicios = document.getElementById('btn-servicios');
    const mainCard = document.getElementById('main-card');
    const btnPlay = document.getElementById('btn-play');
    const speedBtnGroup = document.getElementById('speed-btn-group');
    const speedBtn = document.getElementById('speed-btn');
    const wrapper = document.getElementById('machine-wrapper');
    const nL = document.getElementById('needle-left-group');
    const nR = document.getElementById('needle-right-group');
    const modal = document.getElementById('modal-pass');
    const passInput = document.getElementById('pass-input');

    let isPlaying = false;
    let currentSpeed = 7.5; 
    let audioCtx, source, analyser, dataArray, audioBuffer = null;
    let lastL = -30, lastR = -30;
    let editMode = false;

    // Giro de la máquina
    btnServicios.addEventListener('click', () => {
        mainCard.classList.toggle('flipped');
    });

    // Lógica de Audio
    function initAudio() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            analyser.smoothingTimeConstant = 0.5;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
        }
    }

    async function loadDefault() {
        try {
            const response = await fetch("19.11.25.wav");
            if (response.ok) {
                const ab = await response.arrayBuffer();
                initAudio();
                audioBuffer = await audioCtx.decodeAudioData(ab);
            }
        } catch (e) { console.warn("Audio file issue (ignored for simulation)"); }
    }

    loadDefault();
    updateManualIndex();

    function start() {
        initAudio();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        wrapper.classList.add('playing');
        isPlaying = true;
        if (audioBuffer) {
            source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.playbackRate.value = (currentSpeed === 7.5) ? 1.0 : 0.5;
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
            source.start(0);
            source.onended = () => { if(isPlaying) stop(); };
            requestAnimationFrame(loopVU);
        } else { requestAnimationFrame(loopSimulado); }
    }

    function stop() {
        if (source) { try { source.stop(); } catch(e){} source = null; }
        isPlaying = false;
        wrapper.classList.remove('playing');
        nL.style.transform = `rotate(-30deg)`;
        nR.style.transform = `rotate(-30deg)`;
    }

    function loopVU() {
        if (!isPlaying || !audioBuffer) return;
        analyser.getByteFrequencyData(dataArray);
        let l = 0, r = 0;
        for(let i=0; i<10; i++) l += dataArray[i];
        for(let i=10; i<20; i++) r += dataArray[i];
        const targetL = -30 + (l/10/255 * 70);
        const targetR = -30 + (r/10/255 * 70);
        lastL += (targetL - lastL) * 0.2;
        lastR += (targetR - lastR) * 0.2;
        nL.style.transform = `rotate(${lastL}deg)`;
        nR.style.transform = `rotate(${lastR}deg)`;
        requestAnimationFrame(loopVU);
    }

    function loopSimulado() {
        if (!isPlaying || audioBuffer) return;
        const tL = -20 + Math.random() * 30;
        const tR = -20 + Math.random() * 30;
        lastL += (tL - lastL) * 0.1;
        lastR += (tR - lastR) * 0.1;
        nL.style.transform = `rotate(${lastL}deg)`;
        nR.style.transform = `rotate(${lastR}deg)`;
        requestAnimationFrame(loopSimulado);
    }

    btnPlay.addEventListener('click', () => { if (!isPlaying) start(); else stop(); });

    speedBtnGroup.addEventListener('click', () => {
        currentSpeed = (currentSpeed === 7.5) ? 3.75 : 7.5;
        document.documentElement.style.setProperty('--speed-duration', (currentSpeed === 7.5) ? '4s' : '8s');
        speedBtn.setAttribute('fill', currentSpeed === 7.5 ? '#D9D9D9' : '#C9242B');
        if (source) source.playbackRate.value = (currentSpeed === 7.5) ? 1.0 : 0.5;
    });

    // MODO EDICIÓN (Globales para que los onclick del HTML funcionen)
    window.openModal = () => { if(!editMode) modal.style.display = 'block'; else toggleEdit(false); };
    window.closeModal = () => { modal.style.display = 'none'; passInput.value = ''; };
    window.checkPass = () => {
        if (passInput.value === "1234") { toggleEdit(true); closeModal(); }
        else { alert("ERROR: CLAVE INCORRECTA"); closeModal(); }
    };

    // --- NUEVAS FUNCIONES DE FIREBASE ---

    // 1. Guardar datos en Firebase
    async function saveAllData() {
        const dataToSave = {};

        // Guardar elementos HTML normales (los que tienen clase .editable)
        document.querySelectorAll('.editable').forEach((el, index) => {
            const id = el.id || 'editable-' + index; // Usamos ID o un índice
            dataToSave[id] = el.innerHTML;
        });

        // Guardar textos dentro del SVG
        document.querySelectorAll('.svg-editable').forEach((el, index) => {
            const id = 'svg-' + index;
            dataToSave[id] = el.textContent;
        });

        try {
            await window.fsSetDoc(window.fsDoc(window.db, "configuracion", "textos"), dataToSave);
            console.log("Datos guardados en Firebase correctamente");
        } catch (e) {
            console.error("Error al guardar:", e);
        }
    }

    // 2. Cargar datos desde Firebase
    async function loadAllData() {
        try {
            const docSnap = await window.fsGetDoc(window.fsDoc(window.db, "configuracion", "textos"));
            if (docSnap.exists()) {
                const data = docSnap.data();
                
                // Cargar en HTML
                document.querySelectorAll('.editable').forEach((el, index) => {
                    const id = el.id || 'editable-' + index;
                    if (data[id]) el.innerHTML = data[id];
                });

                // Cargar en SVG
                document.querySelectorAll('.svg-editable').forEach((el, index) => {
                    const id = 'svg-' + index;
                    if (data[id]) el.textContent = data[id];
                });
                
                console.log("Datos cargados desde Firebase");
                if(typeof updateManualIndex === 'function') updateManualIndex();
            }
        } catch (e) {
            console.error("Error al cargar:", e);
        }
    }

    // --- MODIFICACIÓN DE TOGGLEEDIT ---
    function toggleEdit(on) {
        editMode = on;
        document.querySelectorAll('.editable').forEach(el => el.contentEditable = on);
        
        if(on) {
            document.querySelectorAll('.editable').forEach(el => el.classList.add('editable-active'));
        } else {
            document.querySelectorAll('.editable').forEach(el => el.classList.remove('editable-active'));
            // ¡IMPORTANTE! Cuando apagamos el modo edición, guardamos.
            saveAllData(); 
        }

        document.getElementById('btn-add-cat').style.display = on ? 'block' : 'none';
        
        document.querySelectorAll('.svg-editable').forEach(txt => {
            txt.onclick = on ? function() {
                let newVal = prompt("EDITAR TEXTO:", this.textContent);
                if(newVal !== null) {
                    this.textContent = newVal;
                    saveAllData(); // Guardar inmediatamente al cambiar texto de SVG
                }
            } : null;
        });
    }

    // --- LLAMAR A LA CARGA AL INICIAR ---
    // Agrega esto al final del bloque document.addEventListener('DOMContentLoaded', ...
    loadAllData();

    window.addNewService = () => {
        const list = document.getElementById('services-list-back');
        const newY = list.children.length * 40;
        const newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        newText.setAttribute("y", newY);
        newText.setAttribute("class", "service-item-back svg-editable");
        newText.setAttribute("fill", "#eee");
        newText.textContent = "NUEVO SERVICIO";
        list.appendChild(newText);
        toggleEdit(true); 
        updateManualIndex();
    };

    window.toggleManual = () => {
        document.body.classList.toggle('manual-view');
        updateManualIndex();
    };

    function updateManualIndex() {
        const indexDiv = document.getElementById('manual-index');
        const backServices = document.querySelectorAll('.service-item-back');
        if(!indexDiv) return;
        indexDiv.innerHTML = "";
        backServices.forEach((s) => {
            const item = document.createElement('div');
            item.className = "index-link";
            item.textContent = s.textContent;
            item.onclick = () => {
                document.getElementById('m-title').textContent = s.textContent;
                document.getElementById('m-desc').textContent = "Especificaciones detalladas para " + s.textContent;
                document.getElementById('m-price').textContent = "$100.00";
            };
            indexDiv.appendChild(item);
        });
    }

    // Drag and Drop
    document.body.addEventListener('dragover', e => e.preventDefault());
    document.body.addEventListener('drop', async e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('audio')) {
            initAudio();
            const ab = await file.arrayBuffer();
            audioBuffer = await audioCtx.decodeAudioData(ab);
            if (isPlaying) { stop(); start(); }
        }
    });
});
