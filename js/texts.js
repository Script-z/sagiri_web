$.getJSON('https://api.neeko-bot.xyz/servers', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["O melhor bot de música que você vai encontrar.",
        "Uma nova maneira de escutar músicas!",
        "Escute suas músicas favoritas junto dos seus amigos.",
        "Me convide para o seu servidor!",
        "Deixa que eu cuido das suas músicas."
];

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};