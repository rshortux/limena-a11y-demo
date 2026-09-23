// Icon-only button. No accessible name: the SVG is decorative and there
// is no aria-label, so a screen reader announces "button" and nothing
// more. axe-core rule: button-name.
interface IconButtonProps {
  icon: "cart" | "heart" | "share";
  onPress?: () => void;
}

const PATHS: Record<IconButtonProps["icon"], string> = {
  cart:  "M3 3h2l2 12h10l2-8H7",
  heart: "M12 20s-7-4.6-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.4-7 9-7 9z",
  share: "M4 12v7h16v-7M12 3v12M8 7l4-4 4 4",
};

export function IconButton({ icon, onPress }: IconButtonProps) {
  return (
    <button className="icon-button" onClick={onPress}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d={PATHS[icon]} />
      </svg>
    </button>
  );
}
