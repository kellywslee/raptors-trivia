/* eslint-disable react/prop-types */
export default function Button({ text, onClick, label }) {
  const base =
    "rounded-lg bg-red-700 px-4 py-3 font-bold text-gray-50 transition-all hover:bg-red-800 text-base md:text-2xl";
  const styles = {
    start: base,
    next: `${base} py-2 mt-6 md:text-lg`,
  };
  return (
    <button onClick={onClick} className={styles[label]}>
      {text}
    </button>
  );
}
