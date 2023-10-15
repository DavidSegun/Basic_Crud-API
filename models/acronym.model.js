"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var acronymSchema = new mongoose.Schema({
    acronym: String,
    definition: String,
});
var Acronym = mongoose.model('Acronym', acronymSchema);
exports.default = Acronym;
