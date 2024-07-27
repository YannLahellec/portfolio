import { icons } from "../assets";

export const skills = [];

for (const icon in icons) {
  if (skills.length > 6) break;
  skills.push({
    title: icon,
    icon: icons[icon],
  });
}
