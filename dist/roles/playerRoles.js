"use strict";
var _a;
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
exports.playerRolesByEmail = (_a = {},
    _a[exports.specialEmails.istvan] = exports.roles.istvan,
    _a[exports.specialEmails.villain] = exports.roles.villain,
    _a[exports.specialEmails.mortimer] = exports.roles.mortimer,
    _a[exports.specialEmails.acolyte] = exports.roles.acolyte,
    _a);
