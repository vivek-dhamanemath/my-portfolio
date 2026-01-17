"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "./journals";
import { useParallax } from "./useParallax";

interface PhotoCarouselProps {
    photos: Photo[];
    entryIndex: number;
    title: string;
    date: string;
    location: string;
}

export default function PhotoCarousel({ photos, entryIndex, title, date, location }: PhotoCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const { elementRef: parallaxRef, offset } = useParallax({ speed: 0.3 });

    // Lightbox State
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const currentPhoto = photos[currentIndex];
    const hasMultiplePhotos = photos.length > 1;

    // Navigate to specific photo
    const navigateToPhoto = (index: number) => {
        if (index === currentIndex || isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 400);
    };

    // Navigate to next photo
    const navigateNext = () => {
        if (currentIndex < photos.length - 1) {
            navigateToPhoto(currentIndex + 1);
        }
    };

    // Navigate to previous photo
    const navigatePrev = () => {
        if (currentIndex > 0) {
            navigateToPhoto(currentIndex - 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isLightboxOpen) {
                if (e.key === 'ArrowLeft') navigatePrev();
                if (e.key === 'ArrowRight') navigateNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex, photos.length, isLightboxOpen]);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
            if (isLightboxOpen) {
                if (e.key === 'ArrowLeft') navigatePrev();
                if (e.key === 'ArrowRight') navigateNext();
            }
        };
        if (isLightboxOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isLightboxOpen, currentIndex]); // Added currentIndex dependency for nav in lightbox

    // Touch/swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            navigateNext(); // Swipe left
        } else if (distance < -minSwipeDistance) {
            navigatePrev(); // Swipe right
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div className="relative">
            {/* Main Photo Container with Parallax */}
            <div
                ref={parallaxRef}
                className="group/image relative aspect-[3/2] cursor-zoom-in overflow-hidden rounded-lg bg-zinc-100 shadow-2xl dark:bg-zinc-900"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => setIsLightboxOpen(true)}
            >
                {/* Parallax Image */}
                <div
                    className="absolute inset-0 h-[120%]"
                    style={{
                        transform: `translateY(-${offset * 0.15}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <img
                        src={currentPhoto.url}
                        alt={currentPhoto.alt || currentPhoto.caption || 'Journal photo'}
                        className={`h-full w-full object-contain bg-zinc-200/50 transition-opacity duration-400 dark:bg-zinc-800/50 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                            }`}
                        onError={(e) => {
                            e.currentTarget.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop`;
                        }}
                    />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-widest text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/image:opacity-100">
                        View Fullscreen
                    </span>
                </div>

                {/* Vintage Photo Border */}
                <div className="pointer-events-none absolute inset-0 border-8 border-white/90 dark:border-zinc-900/90" />

                {/* Film Grain Overlay */}
                <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-10 dark:opacity-20">
                    <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />

                {/* Navigation Arrows (only if multiple photos) */}
                {hasMultiplePhotos && (
                    <>
                        {currentIndex > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-zinc-900 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white group-hover/image:opacity-100 dark:bg-zinc-900/80 dark:text-zinc-100"
                                aria-label="Previous photo"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        {currentIndex < photos.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateNext(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-zinc-900 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white group-hover/image:opacity-100 dark:bg-zinc-900/80 dark:text-zinc-100"
                                aria-label="Next photo"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </>
                )}
            </div>



            {/* Photo Navigation (only if multiple photos) */}
            {hasMultiplePhotos && (
                <div className="mt-6 flex flex-col items-center gap-4">
                    {/* Indicator Dots */}
                    <div className="flex items-center gap-2">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => navigateToPhoto(index)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-6 bg-zinc-900 dark:bg-zinc-100'
                                    : 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
                                    }`}
                                aria-label={`Go to photo ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {photos.map((photo, index) => (
                            <button
                                key={index}
                                onClick={() => navigateToPhoto(index)}
                                className={`group relative flex-shrink-0 overflow-hidden rounded-md transition-all duration-300 ${index === currentIndex
                                    ? 'scale-105 ring-4 ring-amber-600 dark:ring-amber-500'
                                    : 'ring-2 ring-zinc-300 hover:ring-zinc-400 dark:ring-zinc-700 dark:hover:ring-zinc-600'
                                    }`}
                                style={{ width: '80px', height: '80px' }}
                            >
                                <img
                                    src={photo.url}
                                    alt={photo.alt || `Thumbnail ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Vintage border */}
                                <div className="pointer-events-none absolute inset-0 border-4 border-white/70 dark:border-zinc-900/70" />
                            </button>
                        ))}
                    </div>

                    {/* Photo Caption */}
                    {currentPhoto.caption && (
                        <p
                            className={`font-handwriting text-lg text-zinc-600 transition-opacity duration-300 dark:text-zinc-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                                }`}
                            style={{ transitionDelay: isTransitioning ? '0ms' : '200ms' }}
                        >
                            "{currentPhoto.caption}"
                        </p>
                    )}
                </div>
            )}

            {/* Single Photo Caption (if only one photo) */}
            {!hasMultiplePhotos && currentPhoto.caption && (
                <p className="mt-4 text-center font-handwriting text-lg text-zinc-600 dark:text-zinc-400">
                    "{currentPhoto.caption}"
                </p>
            )}

            {/* --- LIGHTBOX MODAL (Premium Certification Style) --- */}
            {isLightboxOpen && (typeof window !== 'undefined') && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
                        onClick={() => setIsLightboxOpen(false)}
                    />

                    {/* Modal Content */}
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-300 dark:bg-zinc-950"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                            <div>
                                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                    {title}
                                </h3>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {location} • {date}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="relative overflow-auto p-4 sm:p-8">
                            <div className="flex min-h-[40vh] items-center justify-center rounded-lg bg-zinc-100 p-2 dark:bg-zinc-900">
                                <img
                                    src={currentPhoto.url}
                                    alt={currentPhoto.alt || 'Fullscreen view'}
                                    className="max-h-[60vh] max-w-full object-contain shadow-lg rounded-sm"
                                />

                                {/* Navigation Arrows (Floating) */}
                                {hasMultiplePhotos && (
                                    <>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-zinc-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:bg-zinc-900/80 dark:text-zinc-100"
                                        >
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); navigateNext(); }}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-zinc-900 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:bg-zinc-900/80 dark:text-zinc-100"
                                        >
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Footer - Thumbnails & Caption */}
                        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 px-6 py-4 dark:border-zinc-800 sm:flex-row">
                            {/* Left: Thumbnails */}
                            <div className="flex items-center gap-2">
                                {hasMultiplePhotos ? (
                                    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar max-w-[200px] sm:max-w-xs">
                                        {photos.map((photo, index) => (
                                            <button
                                                key={index}
                                                onClick={() => navigateToPhoto(index)}
                                                className={`relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md transition-all ${index === currentIndex
                                                    ? 'ring-2 ring-zinc-900 ring-offset-1 dark:ring-zinc-100 dark:ring-offset-zinc-900'
                                                    : 'opacity-50 hover:opacity-100'
                                                    }`}
                                            >
                                                <img
                                                    src={photo.url}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <span className="text-xs text-zinc-400 font-sans">Single Photo</span>
                                )}
                            </div>

                            {/* Center/Right: Caption & Counter */}
                            <div className="flex flex-col items-end gap-1 text-right">
                                {currentPhoto.caption && (
                                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {currentPhoto.caption}
                                    </p>
                                )}
                                <span className="text-[10px] text-zinc-400">
                                    {currentIndex + 1} / {photos.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
