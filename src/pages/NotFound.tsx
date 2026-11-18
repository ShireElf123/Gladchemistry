import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl ui-card rounded-[2.5rem] p-10 sm:p-14 text-center space-y-6"
      >
        <div className="mx-auto h-16 w-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Compass className="h-8 w-8" />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            404 · Page Not Found
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
            We couldn&rsquo;t find that page
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            The link may be old or mistyped. Everything we make is a tap away — browse
            Gladchemistry organic care, Felis be Glad fragrances, and Bubbles Detergents.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 shadow-lg shadow-emerald-600/25 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3 border border-slate-200 transition"
          >
            Browse the Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
