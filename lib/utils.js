import { BsFileEarmarkPdfFill, BsFiletypeMp4 } from "react-icons/bs";
import { BiSolidFileJpg } from "react-icons/bi";
import { SiJpeg } from "react-icons/si";
import { BiSolidFilePng } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";
import { BsFiletypePptx } from "react-icons/bs";
import { LuFileJson2 } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFileExtension(fileName) {
  const parts = fileName.split(".");
  return parts.length > 1 ? parts.pop() : "";
}

export const extensionToIcon = {
  pdf: {
    icon: <BsFileEarmarkPdfFill />,

    iconClassName: "h-5 w-5 text-red-500",
    iconStyles: {
      color: "red",
      height: "20px",
      width: "20px",
    },
  },
  jpg: {
    icon: <BiSolidFileJpg />,
    iconClassName: "h-5 w-5 text-blue-500",
    iconStyles: {
      color: "blue",
      height: "20px",
      width: "20px",
    },
  },
  jpeg: {
    icon: <SiJpeg />,
    iconClassName: "h-5 w-5 text-blue-500",
    iconStyles: {
      color: "blue",
      height: "20px",
      width: "20px",
    },
  },
  png: {
    icon: <BiSolidFilePng />,
    iconClassName: "h-5 w-5 text-blue-500",
    iconStyles: {
      color: "blue",
      height: "20px",
      width: "20px",
    },
  },
  mp4: {
    icon: <BsFiletypeMp4 />,
    iconClassName: "h-5 w-5 text-orange-500",
    iconStyles: {
      color: "orange",
      height: "20px",
      width: "20px",
    },
  },
  html: {
    icon: <FaHtml5 />,
    iconClassName: "h-5 w-5 text-red-600",
    iconStyles: {
      color: "red",
      height: "20px",
      width: "20px",
    },
  },
  css: {
    icon: <FaCss3Alt />,
    iconClassName: "h-5 w-5 text-blue-600",
    iconStyles: {
      color: "blue",
      height: "20px",
      width: "20px",
    },
  },
  js: {
    icon: <FaJsSquare />,
    iconClassName: "h-5 w-5 text-yellow-500",
    iconStyles: {
      color: "yellow",
      height: "20px",
      width: "20px",
    },
  },
  zip: {
    icon: <BsFillFileEarmarkZipFill />,
    iconClassName: "h-5 w-5 text-green-500",
    iconStyles: {
      color: "green",
      height: "20px",
      width: "20px",
    },
  },
  pptx: {
    icon: <BsFiletypePptx />,
    iconClassName: "h-5 w-5 text-emerald-500",
    iconStyles: {
      color: "green",
      height: "20px",
      width: "20px",
    },
  },
  json: {
    icon: <LuFileJson2 />,
    iconClassName: "h-5 w-5 text-amber-500",
    iconStyles: {
      color: "hsl(43, 89%, 38%)",
      height: "20px",
      width: "20px",
    },
  },
  default: {
    icon: <FaRegFileLines />,
    iconClassName: "h-5 w-5 text-zinc-300",
    iconStyles: {
      color: "zinc",
      height: "20px",
      width: "20px",
    },
  },
};

// export function getIconClass(extension) {
//   return extensionToIcon[extension.toLowerCase()]["icon"] || extensionToIcon["default"]["icon"] ;
// }
export function getIcon(fileName) {
  const extension = getFileExtension(fileName).toLowerCase();
  const iconData = extensionToIcon[extension];
  return iconData ? iconData : extensionToIcon["default"];
}

export function getIconClasses(fileName) {
  const extension = getFileExtension(fileName).toLowerCase();
  const iconData = extensionToIcon[extension];
  return iconData
    ? iconData.iconClassName
    : extensionToIcon["default"].iconClassName;
}

export function getIconStyles(fileName) {
  const extension = getFileExtension(fileName).toLowerCase();
  const iconData = extensionToIcon[extension];
  return iconData ? iconData.iconStyles : extensionToIcon["default"].iconStyles;
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
