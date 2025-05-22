export default function AvatarSvg({ name = "?", className = "", ...props }) {
  const initial = name.charAt(0).toUpperCase();
  const bgColor = stringToColor(name);
  const textColor = getContrastYIQ(bgColor);

  return (
    <div
      className={`w-full h-full font-bold text-4xl select-none flex justify-center items-center ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {initial}
    </div>
  );
}

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color =
    "#" +
    ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 8) & 0xff).toString(16).padStart(2, "0");
  return color.slice(0, 7);
}

function getContrastYIQ(hexColor) {
  hexColor = hexColor.replace("#", "");
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}
