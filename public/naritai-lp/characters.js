'use strict';
// Fictional adult characters: approved up/down artwork; code-native menu icons.
window.NaritaiArt = {
 person(index, instance='hero') {
  const v=index%6;
  const style=`--sprite-x:${(v%3)*50}%;--sprite-y:${Math.floor(v/3)*100}%`;
  if(instance!=='hero')return `<span class="person-art human-art human-art-${v}" aria-hidden="true" style="${style}"></span>`;
  return `<span class="person-art pose-stack" aria-hidden="true" style="${style}"><span class="human-art human-art-${v} pose-down"></span><span class="human-art human-art-${v} pose-up"></span></span>`;
 },
 icon(name) {
  const paths={dashboard:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',alerts:'M6 9a6 6 0 0 1 12 0v6l2 3H4l2-3z M10 21h4',trend:'M2 12h4l3-8 5 16 3-8h5',org:'M12 7v5M5 12h14M5 12v4M19 12v4 M9 2h6v5H9z M2 16h6v6H2z M16 16h6v6h-6z',mbti:'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M2 21v-3a7 7 0 0 1 14 0v3 M17 4a4 4 0 0 1 0 7M19 15q3 1 3 6',logs:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 7v5l4 3',box:'M4 5h16l2 10v5H2v-5z M2 15h6l2 3h4l2-3h6 M7 9h10',retire:'M10 3H3v18h7M8 12h13M17 8l4 4-4 4',support:'M9 4a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0z M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8',cost:'M12 3c-5 0-8 2-8 4s3 4 8 4 8-2 8-4-3-4-8-4 M4 7v6c0 2 3 4 8 4M4 13v4c0 2 3 4 8 4M16 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10'};
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]||paths.dashboard}"/></svg>`;
 }
};
