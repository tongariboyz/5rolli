import {reaction} from 'dacho';


export default reaction([
  'CONFIG_LOAD_REQUEST',
  'CONFIG_LOADED'
], 'IPC/');
