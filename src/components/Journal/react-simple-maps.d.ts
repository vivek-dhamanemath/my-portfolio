declare module 'react-simple-maps' {
    import * as React from 'react';

    export interface ComposableMapProps {
        projection?: string;
        projectionConfig?: any;
        width?: number;
        height?: number;
        className?: string;
        children?: React.ReactNode;
    }

    export const ComposableMap: React.FC<ComposableMapProps>;

    export interface GeographiesProps {
        geography: string | object | any[];
        children: (props: { geographies: any[] }) => React.ReactNode;
    }

    export const Geographies: React.FC<GeographiesProps>;

    export interface GeographyProps {
        geography: any;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
        strokeOpacity?: number;
        className?: string;
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
        onClick?: () => void;
        style?: any;
    }

    export const Geography: React.FC<GeographyProps>;

    export interface MarkerProps {
        coordinates: [number, number];
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
        onClick?: () => void;
        children?: React.ReactNode;
    }

    export const Marker: React.FC<MarkerProps>;

    export interface ZoomableGroupProps {
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        center?: [number, number];
        onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void;
        children?: React.ReactNode;
    }

    export const ZoomableGroup: React.FC<ZoomableGroupProps>;
}
