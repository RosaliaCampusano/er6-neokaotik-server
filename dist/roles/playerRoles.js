"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRolesByEmail = exports.roles = exports.specialEmails = void 0;
exports.specialEmails = {
    istvan: 'classcraft.daw2@aeg.eus',
    villain: 'ozarate@aeg.eus',
    mortimer: 'oskar.calvo@aeg.eus',
    acolyte: '%@ikasle.aeg.eus',
};
exports.roles = {
    'istvan': 'ISTVAN',
    'villain': 'VILLAIN',
    'mortimer': 'MORTIMER',
    'acolyte': 'ACOLYTE',
};
exports.playerRolesByEmail = {
    [exports.specialEmails.istvan]: exports.roles.istvan,
    [exports.specialEmails.villain]: exports.roles.villain,
    [exports.specialEmails.mortimer]: exports.roles.mortimer,
    [exports.specialEmails.acolyte]: exports.roles.acolyte,
};
