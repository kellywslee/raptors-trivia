/* eslint-disable react/prop-types */
export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-red-700 px-4 py-3 text-2xl font-bold text-gray-50 transition-all hover:bg-red-800"
    >
      {text}
    </button>
  );
}
