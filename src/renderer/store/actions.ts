export const FILE_SELECTED = 'FILE_SELECTED';
export const FILE_LOADED = 'FILE_LOADED';
export const FILE_FAILED = 'FILE_FAILED';
export const SENSOR_SELECTED = 'SENSOR_SELECTED';
export const SENSOR_UNSELECTED = 'SENSOR_UNSELECTED';

export interface Sensor {
    id: string;
    description: string;
    position: LatLon
}

export interface LatLon {
    lat: number;
    lon: number;
}

export function selectFile(filename: string): Action {
    return {
        type: FILE_SELECTED,
        payload: { filename },
    };
}

export function loadFile(filename: string, sensors: Sensor[]): Action {
    return {
        type: FILE_LOADED,
        payload: { filename, sensors },
    };
}

export function loadFileFailed(filename: string, reason: string): Action {
    return {
        type: FILE_FAILED,
        payload: { filename, reason }
    };
}

export function selectSensor(sensorId: string): Action {
    return {
        type: SENSOR_SELECTED,
        payload: { sensorId },
    };
}

export function unselectSensor(): Action {
    return {
        type: SENSOR_UNSELECTED,
        payload: null,
    };
}

interface PayloadMap {
    [FILE_SELECTED]: {
        filename: string;
    };
    [FILE_LOADED]: {
        filename: string;
        sensors: Sensor[];
    };
    [FILE_FAILED]: {
        filename: string;
        reason: string;
    };
    [SENSOR_SELECTED]: {
        sensorId: string;
    }
    [SENSOR_UNSELECTED]: null;
}
export type Action = ActionsOfPayloads<PayloadMap>

export type ActionsOfPayloads<TPayloadMap extends {[key: string]: any}> = {
    [K in keyof TPayloadMap]: {
        type: K;
        payload: TPayloadMap[K];
    }
}[keyof TPayloadMap];
