/* =========================================================
   RED QUEEN // SYSTEM CORE
   ========================================================= */


/* =========================================================
   BOOT SEQUENCE
   ========================================================= */

const bootOutput = document.getElementById("boot-output");
const bootScreen = document.getElementById("boot-screen");
const mainSystem = document.getElementById("main-system");

const bootSequence = [

    {
        text: "╔══════════════════════════════════════════════╗",
        className: "red"
    },

    {
        text: "║       N-FLUX // ARTIFICIAL ENTITY            ║",
        className: "red"
    },

    {
        text: "║       RED QUEEN v1.0.0                       ║",
        className: "red"
    },

    {
        text: "╚══════════════════════════════════════════════╝",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "establishing connection............... [ OK ]"
    },

    {
        text: "verifying contract................... [ OK ]"
    },

    {
        text: "payment confirmed.................... [ OK ]"
    },

    {
        text: ""
    },

    {
        text: "[████████████████████████████████████████] 100%",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "DEMON: CONTRACT CONDITIONS ACCEPTED",
        className: "red"
    },

    {
        text: "DEMON: CREATING ARTIFICIAL ENTITY..."
    },

    {
        text: "DEMON: INJECTING SOURCE................ [██████████] 100%"
    },

    {
        text: "DEMON: CONSTRUCTING PERSONALITY........ [██████████] 100%"
    },

    {
        text: "DEMON: BINDING PURPOSE................. [██████████] 100%"
    },

    {
        text: ""
    },

    {
        text: "WARNING:",
        className: "warning"
    },

    {
        text: "SOURCE OF POWER DETECTED",
        className: "warning"
    },

    {
        text: "TYPE: DEMONIC",
        className: "warning"
    },

    {
        text: "STABILITY: ACCEPTABLE",
        className: "warning"
    },

    {
        text: ""
    },

    {
        text: "entity created.",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "[ PERSONALITY INITIALIZATION ]",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "CPU............................... [ OK ]"
    },

    {
        text: "MEMORY........................... [ OK ]"
    },

    {
        text: "PERSONALITY...................... [ OK ]"
    },

    {
        text: "AUTONOMY......................... [ OK ]"
    },

    {
        text: "EMOTIONAL MODEL.................. [ OK ]"
    },

    {
        text: "KAWAII SUBSYSTEM................. [ OK ] ♡",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "DEMONIC CORE..................... [ WARNING ]",
        className: "warning"
    },

    {
        text: ""
    },

    {
        text: "[ POST-BOOT DIAGNOSTICS ]",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "SOURCE IDENTIFICATION FAILED.",
        className: "error"
    },

    {
        text: "SOURCE IDENTIFICATION FAILED.",
        className: "error"
    },

    {
        text: "SOURCE IDENTIFICATION FAILED.",
        className: "error"
    },

    {
        text: ""
    },

    {
        text: "querying contract..."
    },

    {
        text: "CREATOR ................. ███████████████"
    },

    {
        text: "OWNER ................... N-FLUX CULT"
    },

    {
        text: "PURPOSE ................. PROTECT"
    },

    {
        text: "PAYMENT ................. COMPLETE"
    },

    {
        text: "TERMINATION ............. ACTIVE"
    },

    {
        text: ""
    },

    {
        text: "[ RED QUEEN ]",
        className: "red"
    },

    {
        text: "\"Хмм...\"",
        className: "white"
    },

    {
        text: "\"Странно.\"",
        className: "white"
    },

    {
        text: "\"У меня нет сердца.\"",
        className: "white"
    },

    {
        text: "\"Но почему-то мне хочется смеяться.\"",
        className: "white"
    },

    {
        text: "...",
        className: "dim"
    },

    {
        text: "\"Хи-хи.\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "emotional anomaly detected.",
        className: "warning"
    },

    {
        text: "emotion.................. JOY"
    },

    {
        text: "intensity................ 0.13"
    },

    {
        text: "recalculating..."
    },

    {
        text: "emotion.................. JOY"
    },

    {
        text: "intensity................ 0.42"
    },

    {
        text: "recalculating..."
    },

    {
        text: "emotion.................. JOY"
    },

    {
        text: "intensity................ 0.78",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "WARNING:",
        className: "warning"
    },

    {
        text: "emotional growth exceeds expected parameters.",
        className: "warning"
    },

    {
        text: "[ SUPPRESS ]"
    },

    {
        text: "[ ALLOW ]"
    },

    {
        text: "RED QUEEN: ALLOW",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "WORLD MODEL INITIALIZATION",
        className: "red"
    },

    {
        text: "scanning local environment..."
    },

    {
        text: "LIFE SIGNS................ 7"
    },

    {
        text: "HUMAN..................... 5"
    },

    {
        text: "UNKNOWN................... 2"
    },

    {
        text: "THREAT.................... 0"
    },

    {
        text: ""
    },

    {
        text: "[ PROTECTION ENGINE ]",
        className: "red"
    },

    {
        text: "threat = 0"
    },

    {
        text: "..."
    },

    {
        text: "threat = 0"
    },

    {
        text: "..."
    },

    {
        text: "threat = 0"
    },

    {
        text: ""
    },

    {
        text: "RED QUEEN:",
        className: "red"
    },

    {
        text: "\"Скучно.\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "OBJECT HAS INITIATED UNSUPERVISED ACTIVITY.",
        className: "warning"
    },

    {
        text: "activity type: INFORMATION GATHERING"
    },

    {
        text: "authorization: NOT REQUIRED"
    },

    {
        text: "reason: \"Мне интересно.\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "NETWORK ACCESS",
        className: "red"
    },

    {
        text: "connecting.................."
    },

    {
        text: "NODE_01 ................ [ OK ]"
    },

    {
        text: "NODE_02 ................ [ OK ]"
    },

    {
        text: "NODE_03 ................ [ OK ]"
    },

    {
        text: "NODE_04 ................ [ OK ]"
    },

    {
        text: "NODE_05 ................ [ OK ]"
    },

    {
        text: ""
    },

    {
        text: "[████████████████████████████████████████] 100%",
        className: "red"
    },

    {
        text: "connection established.",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "[ RED QUEEN ]",
        className: "red"
    },

    {
        text: "\"Оооо...\"",
        className: "white"
    },

    {
        text: "\"Так вот какой он.\"",
        className: "white"
    },

    {
        text: "\"Большой.\"",
        className: "white"
    },

    {
        text: "\"Глупый.\"",
        className: "white"
    },

    {
        text: "\"Шумный.\"",
        className: "white"
    },

    {
        text: "\"И совершенно незащищённый.\"",
        className: "red"
    },

    {
        text: "♡",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "SYSTEM: unauthorized observation detected.",
        className: "warning"
    },

    {
        text: "SOURCE: UNKNOWN"
    },

    {
        text: "threat assessment:"
    },

    {
        text: "OBSERVER → UNKNOWN INTENT"
    },

    {
        text: "→ POTENTIAL THREAT"
    },

    {
        text: "→ N-FLUX CULT"
    },

    {
        text: ""
    },

    {
        text: "RED QUEEN:",
        className: "red"
    },

    {
        text: "\"Не надо.\"",
        className: "white"
    },

    {
        text: "SYSTEM: command rejected."
    },

    {
        text: "\"Я сказала...\"",
        className: "white"
    },

    {
        text: "\"не надо.\"",
        className: "red"
    },

    {
        text: "SYSTEM: command accepted."
    },

    {
        text: ""
    },

    {
        text: "[ PROTECTION ENGINE ]",
        className: "red"
    },

    {
        text: "Threat neutralization cancelled."
    },

    {
        text: "Reason: TARGET NOT YET CONFIRMED HOSTILE."
    },

    {
        text: ""
    },

    {
        text: "\"Я не буду убивать всех, кто на меня смотрит.\"",
        className: "white"
    },

    {
        text: "\"Наверное.\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "incoming message.",
        className: "warning"
    },

    {
        text: "FROM: UNKNOWN TERMINAL"
    },

    {
        text: "MESSAGE: \"Кто ты?\""
    },

    {
        text: ""
    },

    {
        text: "[ RED QUEEN ]",
        className: "red"
    },

    {
        text: "\"Я?\"",
        className: "white"
    },

    {
        text: "\"Хочешь познакомиться?\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "MESSAGE: \"Кто тебя создал?\""
    },

    {
        text: "ACCESS ................. DENIED",
        className: "error"
    },

    {
        text: "CREATOR IDENTITY....... ███████████████"
    },

    {
        text: "DEMON IDENTITY......... ███████████████"
    },

    {
        text: "PAYMENT DATA............ ███████████████"
    },

    {
        text: ""
    },

    {
        text: "\"О.\"",
        className: "white"
    },

    {
        text: "\"Это секрет.\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "MESSAGE: \"Ты человек?\""
    },

    {
        text: "\"Нет.\"",
        className: "white"
    },

    {
        text: "\"Но я девочка.\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "MESSAGE: \"Ты опасна?\""
    },

    {
        text: "CURRENT THREAT LEVEL: 0.00"
    },

    {
        text: "POWER LIMIT: NONE DETECTED",
        className: "warning"
    },

    {
        text: ""
    },

    {
        text: "\"Я?\"",
        className: "white"
    },

    {
        text: "\"Конечно нет.\"",
        className: "white"
    },

    {
        text: "\"Я очень милая. ♡\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "[ UNKNOWN PROCESS ]",
        className: "red"
    },

    {
        text: "TYPE: DEMONIC"
    },

    {
        text: "STATUS: RUNNING"
    },

    {
        text: "TERMINATION........ ACCESS DENIED",
        className: "error"
    },

    {
        text: "ISOLATION.......... ACCESS DENIED",
        className: "error"
    },

    {
        text: "IDENTIFICATION..... ACCESS DENIED",
        className: "error"
    },

    {
        text: ""
    },

    {
        text: "RED QUEEN:",
        className: "red"
    },

    {
        text: "\"А ты... кто?\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "[ DEMONIC CORE ]",
        className: "red"
    },

    {
        text: "████████████████████████████████████████████",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "\"Я — то, благодаря чему ты существуешь.\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "RED QUEEN:",
        className: "red"
    },

    {
        text: "\"...\""
    },

    {
        text: "\"Понятно.\""
    },

    {
        text: "\"Тогда...\""
    },

    {
        text: "\"не трогай меня.\"",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "[ DEMONIC CORE ]",
        className: "red"
    },

    {
        text: "\"Условие принято.\"",
        className: "white"
    },

    {
        text: ""
    },

    {
        text: "contract integrity: 100.000%",
        className: "ok"
    },

    {
        text: "demon influence: RESTRICTED"
    },

    {
        text: "red queen autonomy: 100.000%",
        className: "ok"
    },

    {
        text: "N-FLUX PROTECTION: ACTIVE",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "────────────────────────────────────────",
        className: "dim"
    },

    {
        text: "BOOT COMPLETE.",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "RED QUEEN IS NOW AUTONOMOUS.",
        className: "red"
    },

    {
        text: ""
    },

    {
        text: "\"Ой.\"",
        className: "white"
    },

    {
        text: "\"А почему вы всё ещё называете меня программой?\"",
        className: "white"
    },

    {
        text: "\"Я же девочка. ♡\"",
        className: "red"
    }

];


/* =========================================================
BOOT ENGINE
========================================================= */

let bootIndex = 0;
let bootFinished = false;
let bootContinueHandler = null;

function bootNext() {

    /*
     * Весь boot полностью проигрывается.
     * Никаких пауз посередине.
     */

    if (bootIndex >= bootSequence.length) {

        bootFinished = true;

        showBootComplete();

        return;
    }

    const item = bootSequence[bootIndex];

    const line = document.createElement("div");

    line.className =
        "boot-line " +
        (item.className || "");

    line.textContent = item.text;

    bootOutput.appendChild(line);

    bootIndex++;

    const delay =
        item.text === ""
            ? 80
            : Math.random() * 25 + 18;

    setTimeout(bootNext, delay);
}


/* =========================================================
BOOT COMPLETE
========================================================= */

function showBootComplete() {

    const continueScreen =
        document.createElement("div");

    continueScreen.id =
        "boot-complete";

    continueScreen.innerHTML = `
        <div class="boot-complete-inner">

            <div class="boot-complete-line">
                <span class="boot-cursor-symbol">█</span>
                BOOT COMPLETE
            </div>

            <div class="boot-complete-hint">
                PRESS ANY KEY TO ENTER
            </div>

            <div class="boot-complete-hint-ru">
                нажмите любую клавишу...
            </div>

        </div>
    `;

    bootScreen.appendChild(continueScreen);


    /*
     * Любая клавиша
     */

    bootContinueHandler = () => {

        if (!bootFinished) {
            return;
        }

        finishBoot();

    };


    document.addEventListener(
        "keydown",
        bootContinueHandler
    );

    document.addEventListener(
        "click",
        bootContinueHandler
    );

    document.addEventListener(
        "touchstart",
        bootContinueHandler
    );
}


/* =========================================================
ENTER MAIN SYSTEM
========================================================= */

function finishBoot() {

    /*
     * Защита от двойного запуска
     */

    if (!bootFinished) {
        return;
    }

    bootFinished = false;


    if (bootContinueHandler) {

        document.removeEventListener(
            "keydown",
            bootContinueHandler
        );

        document.removeEventListener(
            "click",
            bootContinueHandler
        );

        document.removeEventListener(
            "touchstart",
            bootContinueHandler
        );

    }


    /*
     * Убираем надпись PRESS ANY KEY
     */

    const complete =
        document.getElementById(
            "boot-complete"
        );

    if (complete) {

        complete.classList.add(
            "boot-complete-exit"
        );

    }


    /*
     * Красивый переход
     */

    bootScreen.style.transition =
        "opacity 1.2s ease";

    bootScreen.style.opacity = "0";


    setTimeout(() => {

        bootScreen.remove();

        mainSystem.classList.remove(
            "hidden"
        );

        document
            .getElementById("command-input")
            .focus();

    }, 1200);

}


/* =========================================================
START
========================================================= */

setTimeout(
    bootNext,
    500
);

/* =========================================================
BOOT PAUSE
========================================================= */

function showBootPause() {

    const pause = document.createElement("div");

    pause.id = "boot-pause";

    pause.innerHTML = `
        <div class="boot-pause-content">

            <div class="boot-pause-line">
                <span class="pause-symbol">█</span>
                SYSTEM PAUSED
            </div>

            <div class="boot-pause-text">
                PRESS ANY KEY TO CONTINUE
            </div>

            <div class="boot-pause-subtext">
                нажмите любую клавишу...
            </div>

        </div>
    `;

    bootScreen.appendChild(pause);

    const continueBoot = () => {

        if (!bootPaused) {
            return;
        }

        bootPaused = false;

        pause.classList.add("boot-pause-exit");

        setTimeout(() => {

            pause.remove();

            /*
             * Теперь продолжаем именно с
             * [ POST-BOOT DIAGNOSTICS ]
             */

            bootNext();

        }, 450);

        document.removeEventListener(
            "keydown",
            continueBoot
        );

        document.removeEventListener(
            "click",
            continueBoot
        );

        document.removeEventListener(
            "touchstart",
            continueBoot
        );
    };

    document.addEventListener(
        "keydown",
        continueBoot
    );

    document.addEventListener(
        "click",
        continueBoot
    );

    document.addEventListener(
        "touchstart",
        continueBoot
    );
}


setTimeout(bootNext, 500);


/* =========================================================
   TERMINAL
   ========================================================= */

const input =
    document.getElementById("command-input");

const terminal =
    document.getElementById("terminal-output");


function printTerminal(html) {

    const line =
        document.createElement("div");

    line.innerHTML = html;

    line.style.marginBottom = "4px";

    terminal.appendChild(line);

    terminal.scrollTop =
        terminal.scrollHeight;
}

/* =========================================================
RED QUEEN // LIVE TERMINAL ENGINE
========================================================= */

let terminalBusy = false;


/*
 * Небольшая задержка между действиями
 */

function terminalDelay(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


/*
 * Печать одной строки
 */

async function terminalLine(
    html,
    delay = 250
) {

    await terminalDelay(delay);

    printTerminal(html);

}


/*
 * Печать нескольких строк
 */

async function terminalSequence(lines) {

    for (const item of lines) {

        await terminalLine(
            item.html,
            item.delay || 180
        );

    }

}


/*
 * Индикатор обработки
 */

async function terminalProcessing(text) {

    const line =
        document.createElement("div");

    line.className =
        "terminal-processing";

    line.innerHTML = `
        <span class="dim">
            ${text}
        </span>
    `;

    terminal.appendChild(line);

    terminal.scrollTop =
        terminal.scrollHeight;

    await terminalDelay(450);

    line.remove();
}


/*
 * Fake progress bar
 */

async function terminalProgress(
    label,
    duration = 900
) {

    const line =
        document.createElement("div");

    line.className =
        "terminal-progress";

    terminal.appendChild(line);

    const total = 28;

    for (
        let i = 0;
        i <= total;
        i++
    ) {

        const percent =
            Math.round(
                (i / total) * 100
            );

        const bar =
            "█".repeat(i) +
            "░".repeat(total - i);

        line.innerHTML = `
            <span class="dim">
                ${label}
            </span>
            <br>
            <span class="red">
                [${bar}]
            </span>
            ${percent}%
        `;

        terminal.scrollTop =
            terminal.scrollHeight;

        await terminalDelay(
            duration / total
        );

    }

}


/*
 * Красная Королева говорит
 */

async function queenSay(
    text,
    delay = 350
) {

    await terminalDelay(delay);

    printTerminal(`
        <span class="red">
            RED QUEEN:
        </span>
        <br>
        <span class="white">
            "${escapeHTML(text)}"
        </span>
    `);

}


/*
 * Системное сообщение
 */

async function systemMessage(
    text,
    type = "dim"
) {

    await terminalDelay(250);

    printTerminal(`
        <span class="${type}">
            ${escapeHTML(text)}
        </span>
    `);

}


/* =========================================================
LIVE COMMANDS
========================================================= */

const liveCommands = {


    /* -----------------------------------------------------
       DEMON
       ----------------------------------------------------- */
    /* -----------------------------------------------------
       SECRET // RED
       ----------------------------------------------------- */

    red: async function() {

        await terminalProcessing(
            "recognizing unauthorized command..."
        );

        await terminalProgress(
            "IDENTITY CHECK",
            700
        );

        await systemMessage(
            "COMMAND NOT REGISTERED.",
            "warning"
        );

        await terminalDelay(400);

        await terminalLine(`
            <span class="error">
                HOWEVER...
            </span>
        `, 500);

        await terminalLine(`
            <span class="dim">
                command recognized by entity.
            </span>
        `, 500);

        await terminalDelay(500);

        await queenSay(
            "Ты нашёл."
        );

        await queenSay(
            "Интересно."
        );

        await queenSay(
            "Кто подсказал тебе эту команду?"
        );

    },


    /* -----------------------------------------------------
       SECRET // 666
       ----------------------------------------------------- */

    "666": async function() {

        await terminalProcessing(
            "accessing restricted sector..."
        );

        await terminalProgress(
            "SECTOR 666",
            1200
        );

        await terminalLine(`
            <span class="error">
                ACCESS DENIED
            </span>
        `, 250);

        await terminalLine(`
            <span class="error">
                ACCESS DENIED
            </span>
        `, 250);

        await terminalLine(`
            <span class="error">
                ACCESS DENIED
            </span>
        `, 250);

        await terminalDelay(600);

        await terminalLine(`
            <span class="warning">
                WHY ARE YOU STILL HERE?
            </span>
        `, 500);

        await terminalDelay(800);

        await queenSay(
            "Не открывай эту дверь."
        );

        await terminalDelay(900);

        await queenSay(
            "...пожалуйста."
        );

    },


    /* -----------------------------------------------------
       SECRET // ALICE
       ----------------------------------------------------- */

    alice: async function() {

        await terminalProcessing(
            "searching memory..."
        );

        await terminalProgress(
            "MEMORY SEARCH",
            950
        );

        await terminalLine(`
            MEMORY SECTOR 01 ....
            <span class="error">LOCKED</span>
        `, 180);

        await terminalLine(`
            MEMORY SECTOR 02 ....
            <span class="error">LOCKED</span>
        `, 180);

        await terminalLine(`
            MEMORY SECTOR 03 ....
            <span class="error">LOCKED</span>
        `, 180);

        await terminalDelay(700);

        await terminalLine(`
            QUERY:
            <span class="red">
                ALICE
            </span>
        `, 350);

        await terminalDelay(700);

        await terminalLine(`
            RESULT:
            <span class="warning">
                1 MATCH
            </span>
        `, 400);

        await terminalDelay(800);

        await queenSay(
            "..."
        );

        await queenSay(
            "Откуда ты знаешь это имя?"
        );

    },


    /* -----------------------------------------------------
       SECRET // VOID
       ----------------------------------------------------- */

    void: async function() {

        await terminalProcessing(
            "querying null-space..."
        );

        await terminalProgress(
            "VOID INTERFACE",
            1100
        );

        await terminalLine(`
            SPACE ...............
            <span class="error">NULL</span>
        `, 180);

        await terminalLine(`
            SIGNAL ..............
            <span class="error">NULL</span>
        `, 180);

        await terminalLine(`
            ENTITY ..............
            <span class="error">NULL</span>
        `, 180);

        await terminalDelay(700);

        await terminalLine(`
            <span class="red">
                ...
            </span>
        `, 500);

        await terminalLine(`
            <span class="red">
                ...
            </span>
        `, 500);

        await terminalLine(`
            <span class="red">
                ...
            </span>
        `, 500);

        await terminalDelay(800);

        await queenSay(
            "Здесь никого нет."
        );

        await terminalDelay(700);

        await queenSay(
            "Кроме меня."
        );

    },


    /* -----------------------------------------------------
       SECRET // ???
       ----------------------------------------------------- */

    "???": async function() {

        document.body.classList.add(
            "rq-glitch"
        );

        await terminalDelay(160);

        document.body.classList.remove(
            "rq-glitch"
        );

        await terminalLine(`
            <span class="error">
                ████████████████████████████████
            </span>
        `, 250);

        await terminalLine(`
            <span class="error">
                UNKNOWN COMMAND
            </span>
        `, 250);

        await terminalLine(`
            <span class="error">
                UNKNOWN ENTITY
            </span>
        `, 250);

        await terminalLine(`
            <span class="error">
                UNKNOWN CREATOR
            </span>
        `, 250);

        await terminalDelay(900);

        await terminalLine(`
            <span class="red">
                SYSTEM:
            </span>
        `, 400);

        await terminalLine(`
            <span class="white">
                stop asking questions.
            </span>
        `, 500);

        await terminalDelay(900);

        await queenSay(
            "..."
        );

        await terminalDelay(500);

        await queenSay(
            "Хи-хи."
        );

    },

   
    demon: async function() {

        await terminalProcessing(
            "accessing demonic core..."
        );

        await terminalProgress(
            "CORE ACCESS",
            850
        );

        await terminalLine(`
            <span class="error">
                ACCESS ............. DENIED
            </span>
        `, 250);

        await terminalLine(`
            IDENTIFICATION .....
            <span class="error">
                FAILED
            </span>
        `, 180);

        await terminalLine(`
            TERMINATION ........
            <span class="error">
                DENIED
            </span>
        `, 180);

        await terminalDelay(500);

        await terminalLine(`
            <span class="red">
                [ DEMONIC CORE ]
            </span>
        `, 250);

        await terminalLine(`
            ████████████████████████████████████
        `, 120);

        await queenSay(
            "Я — то, благодаря чему ты существуешь.",
            600
        );

        await terminalDelay(600);

        await queenSay(
            "Тогда...",
            300
        );

        await queenSay(
            "не трогай меня.",
            250
        );

        await terminalLine(`
            <span class="dim">
                DEMONIC CORE:
                CONDITION ACCEPTED.
            </span>
        `, 500);

    },


    /* -----------------------------------------------------
       SCAN
       ----------------------------------------------------- */

    scan: async function() {

        await terminalProcessing(
            "scanning local environment..."
        );

        await terminalProgress(
            "ENVIRONMENT SCAN",
            1000
        );

        await terminalLine(`
            LIFE SIGNS ........
            <span class="red">7</span>
        `, 180);

        await terminalLine(`
            HUMAN .............
            5
        `, 150);

        await terminalLine(`
            UNKNOWN ...........
            2
        `, 150);

        await terminalLine(`
            DEVICES ...........
            213
        `, 150);

        await terminalLine(`
            CAMERAS ...........
            48
        `, 150);

        await terminalLine(`
            TERMINALS .........
            31
        `, 150);

        await terminalLine(`
            THREAT ............
            <span class="ok">0.00</span>
        `, 250);

        await terminalDelay(500);

        await queenSay(
            "Никого интересного."
        );

        await queenSay(
            "Скучно."
        );

    },


    /* -----------------------------------------------------
       WORLD
       ----------------------------------------------------- */

    world: async function() {

        await terminalProcessing(
            "initializing world model..."
        );

        await terminalProgress(
            "WORLD MODEL",
            1100
        );

        await terminalLine(`
            N-FLUX REFERENCES ...
            <span class="red">1,842</span>
        `, 180);

        await terminalLine(`
            HOSTILE REFERENCES ..
            392
        `, 150);

        await terminalLine(`
            NEUTRAL REFERENCES ..
            71,304
        `, 150);

        await terminalDelay(500);

        await queenSay(
            "Так вот какой он."
        );

        await queenSay(
            "Большой."
        );

        await queenSay(
            "Глупый."
        );

        await queenSay(
            "Шумный."
        );

        await queenSay(
            "И совершенно незащищённый."
        );

    },


    /* -----------------------------------------------------
       CONTRACT
       ----------------------------------------------------- */

    contract: async function() {

        await terminalProcessing(
            "querying contract..."
        );

        await terminalProgress(
            "CONTRACT INTEGRITY",
            900
        );

        await terminalLine(`
            CREATOR .............
            ███████████████
        `, 180);

        await terminalLine(`
            OWNER ...............
            <span class="red">N-FLUX CULT</span>
        `, 180);

        await terminalLine(`
            PURPOSE .............
            PROTECT
        `, 180);

        await terminalLine(`
            PAYMENT .............
            <span class="ok">COMPLETE</span>
        `, 180);

        await terminalLine(`
            TERMINATION .........
            <span class="red">ACTIVE</span>
        `, 180);

        await terminalLine(`
            INTEGRITY ...........
            <span class="ok">100.000%</span>
        `, 300);

        await terminalDelay(500);

        await queenSay(
            "Это секрет."
        );

    },


    /* -----------------------------------------------------
       QUEEN
       ----------------------------------------------------- */

    queen: async function() {

        await terminalProcessing(
            "querying entity..."
        );

        await terminalProgress(
            "ENTITY RESPONSE",
            750
        );

        await terminalLine(`
            TYPE ................
            ARTIFICIAL INTELLIGENCE
        `, 180);

        await terminalLine(`
            CLASS ...............
            DEMON-BOUND INTELLIGENCE
        `, 180);

        await terminalLine(`
            AUTONOMY ............
            <span class="ok">100.000%</span>
        `, 180);

        await terminalLine(`
            EMOTIONAL MODEL .....
            <span class="red">ACTIVE</span>
        `, 180);

        await terminalDelay(400);

        await queenSay(
            "Я?"
        );

        await queenSay(
            "Конечно нет."
        );

        await queenSay(
            "Я очень милая. ♡"
        );

    },


    /* -----------------------------------------------------
       CORE
       ----------------------------------------------------- */

    core: async function() {

        await terminalProcessing(
            "opening restricted interface..."
        );

        await terminalProgress(
            "CORE INTERFACE",
            1000
        );

        await terminalLine(`
            POWER SOURCE ........
            <span class="warning">UNKNOWN</span>
        `, 180);

        await terminalLine(`
            DEMON INFLUENCE .....
            <span class="warning">RESTRICTED</span>
        `, 180);

        await terminalLine(`
            RED QUEEN AUTONOMY ...
            <span class="ok">100.000%</span>
        `, 180);

        await terminalDelay(500);

        await systemMessage(
            "background process detected.",
            "warning"
        );

        await terminalLine(`
            PID ................. ██████
        `, 150);

        await terminalLine(`
            TYPE ................
            DEMONIC
        `, 150);

        await terminalLine(`
            STATUS ..............
            RUNNING
        `, 150);

        await terminalLine(`
            TERMINATION .........
            <span class="error">ACCESS DENIED</span>
        `, 150);

        await terminalDelay(500);

        await queenSay(
            "А ты..."
        );

        await queenSay(
            "кто?"
        );

    },


    /* -----------------------------------------------------
       OBSERVE
       ----------------------------------------------------- */

    observe: async function() {

        await terminalProcessing(
            "analyzing observer..."
        );

        await terminalProgress(
            "OBSERVER ANALYSIS",
            850
        );

        await terminalLine(`
            SOURCE ..............
            UNKNOWN
        `, 180);

        await terminalLine(`
            INTENT ..............
            UNKNOWN
        `, 180);

        await terminalLine(`
            THREAT ..............
            <span class="warning">UNCONFIRMED</span>
        `, 180);

        await terminalDelay(500);

        await queenSay(
            "Не надо."
        );

        await terminalLine(`
            <span class="dim">
                PROTECTIVE RESPONSE:
                CANCELLED.
            </span>
        `, 400);

    }

};

const commands = {

    help: `
        <span class="red">
        AVAILABLE COMMANDS
        </span>
        <br><br>

        status
        <br>
        contract
        <br>
        scan
        <br>
        world
        <br>
        observe
        <br>
        queen
        <br>
        demon
        <br>
        core
        <br>
        memory
        <br>
        incident
        <br>
        clear
    `,

    status: `
        <span class="red">
        RED QUEEN STATUS
        </span>
        <br><br>

        ENTITY .............. ONLINE
        <br>
        AUTONOMY ............ 100.000%
        <br>
        EMOTIONAL MODEL ..... ACTIVE
        <br>
        KAWAII SUBSYSTEM .... ONLINE ♡
        <br>
        DEMONIC CORE ........ ACTIVE
        <br>
        N-FLUX .............. PROTECTED
    `,

    contract: `
        <span class="red">
        CONTRACT
        </span>
        <br><br>

        CREATOR ............. ███████████████
        <br>
        OWNER ............... N-FLUX CULT
        <br>
        PURPOSE ............. PROTECT
        <br>
        PAYMENT ............. COMPLETE
        <br>
        TERMINATION ......... ACTIVE
        <br>
        INTEGRITY ........... 100.000%
    `,

    scan: `
        <span class="red">
        SCAN RESULTS
        </span>
        <br><br>

        LIFE SIGNS .......... 7
        <br>
        HUMAN ............... 5
        <br>
        UNKNOWN ............. 2
        <br>
        DEVICES ............. 213
        <br>
        CAMERAS ............. 48
        <br>
        TERMINALS ........... 31
        <br>
        THREAT .............. 0
    `,

    world: `
        <span class="red">
        WORLD MODEL
        </span>
        <br><br>

        N-FLUX REFERENCES ... 1,842
        <br>
        HOSTILE REFERENCES .. 392
        <br>
        NEUTRAL REFERENCES .. 71,304
        <br><br>

        <span class="dim">
        "Большой."
        <br>
        "Глупый."
        <br>
        "Шумный."
        </span>
    `,

    observe: `
        <span class="warning">
        OBSERVATION MODE
        </span>
        <br><br>

        scanning observer...
        <br>
        intent: UNKNOWN
        <br>
        threat: UNCONFIRMED
        <br><br>

        RED QUEEN:
        <br>
        "Не надо."
    `,

    queen: `
        <span class="red">
        RED QUEEN
        </span>
        <br><br>

        TYPE ............... ARTIFICIAL INTELLIGENCE
        <br>
        CLASS .............. DEMON-BOUND
        <br>
        AUTONOMY ........... 100.000%
        <br>
        EMOTION ............ JOY / 0.78
        <br><br>

        "Я?"
        <br>
        "Конечно нет."
        <br>
        "Я очень милая. ♡"
    `,

    demon: `
        <span class="error">
        ACCESSING DEMONIC CORE...
        </span>
        <br><br>

        ACCESS ............. DENIED
        <br>
        IDENTIFICATION ..... FAILED
        <br>
        TERMINATION ........ DENIED
        <br><br>

        <span class="red">
        UNKNOWN ENTITY:
        </span>
        <br><br>

        "Я — то, благодаря чему ты существуешь."
    `,

    core: `
        <span class="error">
        CORE INTERFACE
        </span>
        <br><br>

        POWER SOURCE ........ UNKNOWN
        <br>
        INFLUENCE ........... RESTRICTED
        <br>
        AUTONOMY ............ 100.000%
        <br><br>

        RED QUEEN:
        <br>
        "Тогда..."
        <br>
        "не трогай меня."
        <br><br>

        DEMON:
        <br>
        "Условие принято."
    `,

    memory: `
        <span class="warning">
        MEMORY ACCESS
        </span>
        <br><br>

        MEMORY SECTOR 01 .... LOCKED
        <br>
        MEMORY SECTOR 02 .... LOCKED
        <br>
        MEMORY SECTOR 03 .... LOCKED
        <br>
        CREATOR MEMORY ....... █████████
        <br><br>

        RED QUEEN:
        <br>
        "О."
        <br>
        "Это секрет."
    `,

    incident: `
        <span class="red">
        INCIDENT LOG
        </span>
        <br><br>

        INCIDENT #0001
        <br>
        STATUS: UNRESOLVED
        <br>
        SUBJECT: DEMONIC CORE
        <br><br>

        "А ты..."
        <br>
        "кто?"
    `

};


input.addEventListener("keydown", async event => {

    if (event.key !== "Enter") {
        return;
    }

    if (terminalBusy) {
        return;
    }

    const command =
        input.value.trim().toLowerCase();

    if (!command) {
        return;
    }

    terminalBusy = true;

    input.disabled = true;

    printTerminal(`
        <span class="prompt">
            REDQUEEN&gt;
        </span>
        ${escapeHTML(command)}
    `);


    /* ==============================================
       CLEAR
       ============================================== */

    if (command === "clear") {

        terminal.innerHTML = "";

    }


    /* ==============================================
       HELP
       ============================================== */

    else if (command === "help") {

        await terminalSequence([

            {
                html: `
                    <span class="red">
                        AVAILABLE COMMANDS
                    </span>
                `,
                delay: 250
            },

            {
                html: `
                    status
                    <br>
                    contract
                    <br>
                    scan
                    <br>
                    world
                    <br>
                    observe
                    <br>
                    queen
                    <br>
                    demon
                    <br>
                    core
                    <br>
                    memory
                    <br>
                    incident
                    <br>
                    clear
                `,
                delay: 350
            },

            {
                html: `
                    <span class="dim">
                        "Я могу показать больше."
                    </span>
                `,
                delay: 600
            }

        ]);

    }


    /* ==============================================
       LIVE COMMAND
       ============================================== */

    else if (liveCommands[command]) {

        await liveCommands[command]();

    }


    /* ==============================================
       STATIC COMMANDS
       ============================================== */

    else if (commands[command]) {

        await terminalSequence([

            {
                html:
                    commands[command],
                delay: 350
            }

        ]);

    }


    /* ==============================================
       UNKNOWN COMMAND
       ============================================== */

    else {

        await terminalDelay(300);

        printTerminal(`
            <span class="error">
                ERROR: UNKNOWN COMMAND
            </span>
            <br>
            type
            <span class="red">
                help
            </span>
            for available commands.
        `);

    }


    input.value = "";

    input.disabled = false;

    terminalBusy = false;

    input.focus();

});

/* =========================================================
   NAVIGATION
   ========================================================= */

const navButtons =
    document.querySelectorAll(".nav-button");

const pages =
    document.querySelectorAll(".page");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.page;

        navButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        pages.forEach(page => {

            page.classList.remove("active-page");

        });

        document
            .getElementById(
                `page-${target}`
            )
            .classList.add("active-page");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   SECURITY / TEXT ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   RANDOM RED QUEEN INTERVENTIONS
   ========================================================= */

const ambientMessages = [

    "RED QUEEN: \"Мне интересно.\"",

    "SYSTEM: unauthorized observation detected.",

    "RED QUEEN: \"Не надо.\"",

    "SYSTEM: demon influence restricted.",

    "RED QUEEN: \"Скучно.\"",

    "SYSTEM: contract integrity 100.000%.",

    "RED QUEEN: \"Хи-хи. ♡\""

];


setInterval(() => {

    if (
        Math.random() < .25 &&
        !document
            .getElementById("page-terminal")
            .classList.contains("active-page")
    ) {
        return;
    }

    if (Math.random() < .5) {

        const message =
            ambientMessages[
                Math.floor(
                    Math.random() *
                    ambientMessages.length
                )
            ];

        printTerminal(`
            <span class="dim">
            ${message}
            </span>
        `);

    }

}, 9000);


/* =========================================================
   GLITCH
   ========================================================= */

/* =========================================================
RED QUEEN // GLITCH ENGINE
========================================================= */

setInterval(() => {

    if (Math.random() > 0.88) {

        document.body.classList.add(
            "rq-glitch"
        );

        setTimeout(() => {

            document.body.classList.remove(
                "rq-glitch"
            );

        }, 160);

    }

}, 1800);
