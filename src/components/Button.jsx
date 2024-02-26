/* eslint-disable react/prop-types */
export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text:lg rounded-lg bg-red-700 px-4 py-3 font-bold text-gray-50 transition-all hover:bg-red-800 md:text-2xl"
    >
      {text}
    </button>
  );
}
