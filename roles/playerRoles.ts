
export const specialEmails = {
    istvan : 'classcraft.daw2@aeg.eus',
    villano : 'ozarate@aeg.eus',
    mortimer: 'oskar.calvo@aeg.eus',
    acolito: '%@ikasle.aeg.eus',
}

export const roles = {
    'istvan': 'ISTVAN',
    'villano': 'VILLANO',
    'mortimer': 'MORTIMER',
    'acolito': 'ACOLITO',

};


export const playerRolesByEmail = {
    [specialEmails.istvan] : [roles.istvan],
    [specialEmails.villano]: [roles.villano],
    [specialEmails.mortimer]: [roles.mortimer],
    [specialEmails.acolito]: [roles.acolito],
};
