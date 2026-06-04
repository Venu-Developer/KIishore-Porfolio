"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [pdfJsLoaded, setPdfJsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const w = window as any;
    if (!pdfJsLoaded || !w.pdfjsLib) return;

    w.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    
    const loadPdf = async () => {
      try {
        const loadingTask = w.pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        renderPage(pdf, 1);
      } catch (e) {
        console.error("Error loading PDF", e);
        setError(true);
      }
    };
    loadPdf();
  }, [url, pdfJsLoaded]);

  const renderTaskRef = useRef<any>(null);

  const renderPage = async (pdf: any, num: number) => {
    try {
      const page = await pdf.getPage(num);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const viewport = page.getViewport({ scale: 1.0 });
      
      // Scale down to fit the container precisely (280px to fit inside the bezel nicely)
      const containerWidth = 280;
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      // Handle Device Pixel Ratio for sharp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(scaledViewport.width * dpr);
      canvas.height = Math.floor(scaledViewport.height * dpr);
      canvas.style.width = `${Math.floor(scaledViewport.width)}px`;
      canvas.style.height = `${Math.floor(scaledViewport.height)}px`;

      // Cancel previous render task if it exists to avoid conflicts
      if (renderTaskRef.current) {
        await renderTaskRef.current.cancel();
      }

      const renderContext = {
        canvasContext: ctx,
        viewport: scaledViewport,
        transform: [dpr, 0, 0, dpr, 0, 0] as any,
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;

      await renderTask.promise;
    } catch (err: any) {
      // Ignore cancellation errors
      if (err.name !== 'RenderingCancelledException') {
        console.error("Render error", err);
      }
    }
  };

  const handlePrev = () => {
    if (pageNum <= 1) return;
    setPageNum((prev) => {
      renderPage(pdfDoc, prev - 1);
      return prev - 1;
    });
  };

  const handleNext = () => {
    if (pageNum >= numPages) return;
    setPageNum((prev) => {
      renderPage(pdfDoc, prev + 1);
      return prev + 1;
    });
  };

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js" 
        onLoad={() => setPdfJsLoaded(true)}
      />
      <div className="flex flex-col items-center w-full h-full bg-white relative rounded-[28px] overflow-hidden">
        {error ? (
          <div className="flex-1 w-full flex justify-center items-center text-sm text-gray-500 p-4 text-center">
            Failed to load PDF.
          </div>
        ) : (
          <div className="flex-1 w-full overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center pt-2">
            {!pdfJsLoaded && (
              <div className="text-gray-400 mt-10 text-sm">Loading Document...</div>
            )}
            <canvas ref={canvasRef} className="shadow-sm max-w-full" />
          </div>
        )}

        {/* Custom Pagination Footer */}
        {numPages > 1 && (
          <div className="w-full bg-[#1A1A1A]/90 backdrop-blur-md text-white py-3 flex items-center justify-between px-6 text-sm font-medium z-10 absolute bottom-0">
            <button
              onClick={handlePrev}
              disabled={pageNum <= 1}
              className="disabled:opacity-30 hover:text-orange-400 transition cursor-pointer px-2 py-1"
            >
              Prev
            </button>
            <span className="text-gray-300 text-xs tracking-wider">
              {pageNum} / {numPages}
            </span>
            <button
              onClick={handleNext}
              disabled={pageNum >= numPages}
              className="disabled:opacity-30 hover:text-orange-400 transition cursor-pointer px-2 py-1"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
