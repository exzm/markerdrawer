/// <reference types="leaflet" />
import { Atlas } from './Atlas';
import { Marker, IRenderer, Vec2 } from './types';
export declare class CanvasRenderer implements IRenderer {
    container: HTMLDivElement;
    private _atlas;
    private _markers;
    private _markersData;
    private _isZooming;
    private _debugDrawing;
    private _map;
    private _size;
    private _mapSize;
    private _zoom;
    private _bufferFactor;
    private _bufferOffset;
    private _origin;
    private _pixelRatio;
    private _currentFrame;
    private _hiddenFrame;
    private _isRendering;
    private _timePerFrame;
    private _markersPerFrame;
    private _lastRenderedMarker;
    private _needUpdate;
    private _requestAnimationFrameId;
    private _vec;
    constructor(atlas: Atlas, debugDrawing: boolean, bufferFactor: number, zIndex?: number);
    setMarkers(markers: Marker[]): void;
    onAddToMap(map: L.Map): void;
    onRemoveFromMap(): void;
    clear(): void;
    update: () => void;
    search(point: Vec2): number[];
    setDebugDrawing(value: boolean): void;
    private _onResize;
    private _onZoomStart;
    private _onMoveEnd;
    private _render();
    private _renderLoop;
    private _renderFinish();
    private _renderPart(from, to);
    private _debugDraw(marker, offset, size);
    private _createFrame();
    private _switchFrames();
}