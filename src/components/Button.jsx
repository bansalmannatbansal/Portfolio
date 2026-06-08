import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'secondary',
  href,
  onClick,
  className = '',
  icon: Icon,
  download,
  target,
  rel,
  ...props
}) {
  const baseStyle =
    "group inline-flex items-center justify-center gap-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 h-11 sm:h-12 px-5 sm:px-6 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] active:scale-[0.98] border";

  const variants = {
    primary:
      "bg-white text-black border-transparent hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary:
      "bg-[#111111]/80 backdrop-blur-sm text-gray-300 border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-[#151515] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...props}>
      {content}
    </button>
  );
}
