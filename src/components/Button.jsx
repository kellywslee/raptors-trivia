/* eslint-disable react/prop-types */
export default function Button({ text, onClick, label, disabled }) {
  const base =
    "rounded-lg text-gray-50 transition-all text-base font-bold bg-red-700 px-4 py-3 hover:bg-red-800";
  const styles = {
    start: `${base} md:text-2xl`,
    finish: `${base} w-40 md:text-lg`,
  };
  return (
    <button onClick={onClick} className={styles[label]} disabled={disabled}>
      {text}
    </button>
  );
}
