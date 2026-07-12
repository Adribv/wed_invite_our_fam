import logoImg from "@/assets/image.png";

// Logo emblem using imported image
export function CrownEmblem({ size = 56 }: { size?: number }) {
  return (
    <img
      src={logoImg}
      alt="Abdullah & Safiyyah Monogram"
      width={size}
      height={size}
      style={{ maxWidth: size, height: "auto" }}
    />
  );
}
