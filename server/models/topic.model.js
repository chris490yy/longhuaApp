'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
  topicName: {
    type: String,
    default: '',
    trim: true,
    max:6,
    min:1
  },
  description:{
    type: String,
    default: '',
    trim: true,
    max:50,
  },
  img:{
  	type: String,
  	default:'http://tympanus.net/Development/HoverEffectIdeas/img/25.jpg',
  },
  effect:{
  	type: String,
  	default:'effect-roxy',
  }

});

module.exports = mongoose.model('Topic', TopicSchema);
