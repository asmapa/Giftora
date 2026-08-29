import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

/**
 * ShareButton
 * variant="icon"  -> small round icon button (used on product cards)
 * variant="text"  -> full button with label (used on product details page)
 */
const ShareButton = ({ product, variant = 'icon', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const url = `${window.location.origin}/product/${product.productId}`;
    const shareData = {
      title: product?.name || 'Eshaal D\'signs',
      text: `Check out ${product?.name || 'this beautiful piece'} on Eshaal D'signs ✨`,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
    } catch (err) {
      // If the user cancels the native share sheet, do nothing
      if (err?.name === 'AbortError') return;
    }

    // Fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
    }
  };

  if (variant === 'text') {
    return (
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 border border-pink-300 text-pink-700 px-6 py-3 rounded-lg hover:bg-pink-50 transition shadow-sm font-medium ${className}`}
      >
        {copied ? <Check size={18} className="text-green-600" /> : <Share2 size={18} />}
        {copied ? 'Link Copied!' : 'Share'}
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        title="Share this product"
        aria-label="Share this product"
        className={`bg-white p-2 rounded-full shadow-md hover:scale-110 transition ${className}`}
      >
        {copied ? (
          <Check size={18} className="text-green-500" />
        ) : (
          <Share2 size={18} className="text-gray-500 hover:text-pink-600 transition" />
        )}
      </button>

      {copied && (
        <span className="absolute -bottom-8 right-0 bg-gray-800 text-white text-[11px] px-2 py-1 rounded-md whitespace-nowrap shadow-lg z-10">
          Link copied!
        </span>
      )}
    </div>
  );
};

export default ShareButton;
