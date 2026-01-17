"use client";

import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { JournalEntry } from "./journals";

// A highly reliable World GeoJSON that includes India. 
// Using GeoJSON can sometimes be more compatible with react-simple-maps' default behavior.
const MAP_URL = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

interface JournalMapProps {
    entries: JournalEntry[];
    onMarkerClick: (entry: JournalEntry) => void;
}

export default function JournalMap({ entries, onMarkerClick }: JournalMapProps) {
    const [tooltipContent, setTooltipContent] = useState("");

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/50 aspect-[16/9] sm:aspect-[21/9]">
            {/* Simple Tooltip */}
            {tooltipContent && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-900 shadow-xl backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-100">
                    {tooltipContent}
                </div>
            )}

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 600,
                    center: [82, 22] // Better centering for India
                }}
                className="h-full w-full"
            >
                <ZoomableGroup zoom={1} minZoom={0.5} maxZoom={5}>
                    <Geographies geography={MAP_URL}>
                        {({ geographies }) =>
                            geographies && geographies.length > 0 ? (
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="currentColor"
                                        className="text-zinc-200 dark:text-zinc-800 outline-none transition-all duration-300 hover:text-zinc-400 dark:hover:text-zinc-600"
                                        stroke="#ffffff"
                                        strokeWidth={0.5}
                                    />
                                ))
                            ) : (
                                <g>
                                    <text x="400" y="200" textAnchor="middle" className="fill-zinc-400 text-[10px] font-mono animate-pulse">
                                        RETRACING COORDINATES...
                                    </text>
                                </g>
                            )
                        }
                    </Geographies>

                    {entries.map((entry) => {
                        if (!entry.coordinates) return null;
                        return (
                            <Marker
                                key={entry.id}
                                coordinates={entry.coordinates}
                                onMouseEnter={() => setTooltipContent(`${entry.title} - ${entry.location}`)}
                                onMouseLeave={() => setTooltipContent("")}
                                onClick={() => onMarkerClick(entry)}
                            >
                                <g className="cursor-pointer">
                                    {/* Pulsating Ring */}
                                    <circle
                                        r={6}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                        className="animate-ping text-zinc-900 dark:text-zinc-100"
                                    />
                                    {/* Core Marker */}
                                    <circle
                                        r={3}
                                        fill="currentColor"
                                        className="text-zinc-900 dark:text-zinc-100 transition-transform duration-300 hover:scale-150 shadow-xl"
                                    />
                                </g>
                            </Marker>
                        );
                    })}
                </ZoomableGroup>
            </ComposableMap>

            {/* Hint Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                    Scroll to zoom • Click markers to explore
                </span>
            </div>
        </div>
    );
}
