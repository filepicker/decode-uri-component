import {expectType} from 'tsd';
import decodeUriComponent = require('./index.js');

expectType<string>(decodeUriComponent('st%C3%A5le'));
