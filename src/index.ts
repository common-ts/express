import {GenericController} from './GenericController';
import {GenericSearchController} from './GenericSearchController';
import {HealthController} from './HealthController';
import {LoadController} from './LoadController';
import {LoadSearchController} from './LoadSearchController';
import {LowCodeController} from './LowCodeController';
import {Service} from './LowCodeController';
import {SearchController} from './SearchController';

export {HealthController as HealthHandler};
export {LoadController as LoadHandler};
export {LoadController as ViewHandler};
export {LoadController as ViewController};

export {GenericController as GenericHandler};
export {SearchController as SearchHandler};
export {LoadSearchController as LoadSearchHandler};
export {GenericSearchController as GenericSearchHandler};
export {LowCodeController as LowCodeHandler};
export {LowCodeController as Handler};
export {LowCodeController as Controller};
export {Service as LowCodeService};

export * from './health';
export * from './HealthController';
export * from './http';
export * from './metadata';
export * from './view';
export * from './LoadController';
export * from './search_func';
export * from './search';
export * from './SearchController';
export * from './LoadSearchController';
export * from './resources';
export * from './edit';
export * from './GenericController';
export * from './GenericSearchController';
export * from './LowCodeController';
