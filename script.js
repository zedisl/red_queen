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

function bootNext() {

    if (bootIndex >= bootSequence.length) {

        setTimeout(() => {

            bootScreen.style.transition =
                "opacity 1.2s ease";

            bootScreen.style.opacity = "0";

            setTimeout(() => {

                bootScreen.remove();

                mainSystem.classList.remove("hidden");

                document
                    .getElementById("command-input")
                    .focus();

            }, 1200);

        }, 1600);

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


input.addEventListener("keydown", event => {

    if (event.key !== "Enter") {
        return;
    }

    const command =
        input.value.trim().toLowerCase();

    if (!command) {
        return;
    }

    printTerminal(`
        <span class="prompt">
        REDQUEEN&gt;
        </span>
        ${escapeHTML(command)}
    `);

    if (command === "clear") {

        terminal.innerHTML = "";

    } else if (commands[command]) {

        printTerminal(commands[command]);

    } else {

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

setInterval(() => {

    if (Math.random() > .9) {

        document.body.style.transform =
            `translateX(${Math.random() * 2 - 1}px)`;

        setTimeout(() => {

            document.body.style.transform = "";

        }, 60);

    }

}, 1200);
