import { Logger } from './lib/logger.interface';

// const img = require("./assets/images/unsplash-photo-1.jpg") // including this will enable the image to be part of the output, part of tree shaking.

const logger = {

    log: (message) => console.log(new Date(), message)

} as Logger;


logger.log('Hello this is an example of using an interface to create a typed logger');
