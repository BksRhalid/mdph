'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentCategorySchema = new Schema({
  mdph:             { type: Schema.Types.ObjectId, ref: 'Mdph' },
  label:            { type: String, required: true, default: 'Nouvelle catégorie' },
  parent:           { type: Schema.Types.ObjectId, ref: 'DocumentCategory' },
  documentTypes:    [{type: String}],
  barcode:          { type: Schema.Types.ObjectId },
  position:         { type: Number }
});

module.exports = mongoose.model('DocumentCategory', DocumentCategorySchema);
