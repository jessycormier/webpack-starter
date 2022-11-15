import { Logger } from './lib/logger.interface';
import './styles/main.scss';


const logger = {

    log: (message) => console.log(new Date(), message)

} as Logger;


logger.log('Hello this is an example of using an interface to create a typed logger');
