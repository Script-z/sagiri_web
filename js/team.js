const TEAM_API = 'https://api.neeko-bot.xyz/uavatar=';
const teamContainer = document.querySelector('.team-container');

const teamMembers = [
    {
        discordID: '349596334334148608',
        name: "noway'",
        info: 'Creator / Dev',
    },
    {
        discordID: '822005063877918720',
        name: 'Gabro',
        info: 'Code / Software Engineer ',
    },
    {
        discordID: '578637054087397386',
        name: 'Dinn',
        info: 'Owner / Support Team',
    },
    {
        discordID: '227061855028379649',
        name: 'Sushi',
        info: 'Code / Support Team',
    },
    {
        discordID: '852609490741362698',
        name: 'Shiro',
        info: 'Designer / Support Team',
    },
    {
        discordID: '852644791887200346',
        name: 'Sorvetin',
        info: 'Support Team',
    },
    {
        discordID: '759158569076654101',
        name: 'DDOX',
        info: 'Support Team',
    },
    {
        discordID: '683139770427506810',
        name: 'Dark',
        info: 'Support Team',
    },
    {
        discordID: '423478966058221578',
        name: 'Saitama',
        info: 'Support Team',
    }
];

/**
 * Fetches the URL to a user's Discord profile picture
 * @param {Array<string>} ids 
 * @returns {Promise<Object>|null}
 */
async function fetchPictures(ids) {
    try {
        let picture = await fetch(TEAM_API + ids)
        return await picture.json();
    } catch (o_O) {
        return null;
    }
}

/**
 * Adds all the team members to the page
 * @param {string} members 
 * @returns {void}
 */
function addMembers(members) {
    teamContainer.innerHTML += members;
}

/**
 * Adds all the translators to the page
/**
 * A function that generates an appropiate div with the details of a team member
 * @param {string} avatar 
 * @param {object} member
 * @returns {string}
 */
function teamMemberTemplate(avatar, member) {
    let strTemplate = '';

    member.name == "noway'" ? strTemplate += `<div class='team-member', style='background-image: url("https://cdn.discordapp.com/attachments/845051613360947291/867259285969174538/tumblr_n32gid2VED1tuy4zpo1_500.gif")'>` : strTemplate += `<div class='team-member'>`;


    strTemplate += `
        <div class='team-member-img'><img src='${avatar}'></div>
        <div class='team-member-name'>${member.name}</div>
        ${member.info ? ((member.name == 'Mandruyd') ? `<div class='team-member-info' style='color: cyan; opacity: 1'>${member.info}</div>` : `<div class='team-member-info'>${member.info}</div>`) : ''}
        <div class='team-member-social'>
            ${member.githubLink ? `<button><a href='${member.githubLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-github'></i></a></button>` : ''}
            ${member.websiteLink ? `<button><a href='${member.websiteLink}' target='_blank' rel=”noreferrer noopener”><i class='fas fa-link'></i></a></button>` : ''}
            ${member.instagramLink ? `<button><a href='${member.instagramLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-instagram'></i></a></button>` : ''}      
            ${member.youtubeLink ? `<button><a href='${member.youtubeLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-youtube'></i></a></button>` : ''}                    
        </div>
    </div>
    `;

    return strTemplate;
}

/**
 * @param {Object} object 
 * @param {string} id 
 * @returns {string}
 */
function getAvatar(object, id) {
    if (object && !!object[id]) return object[id];

    const numbers = [1, 2, 3, 4];
    return `https://cdn.discordapp.com/embed/avatars/${numbers[Math.floor(Math.random() * numbers.length)]}.png`
}

(async () => {
    let createUsers = '';

    const avatars = await fetchPictures([...teamMembers].map(member => member.discordID).join(','));

    for (let i = 0; i < teamMembers.length; i++) {
        createUsers += teamMemberTemplate(getAvatar(avatars, teamMembers[i].discordID), teamMembers[i]);
    }

    addMembers(createUsers);
})();
