export const Logo = (props: any) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 431 364"
      width="22"
      height="22"
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="m0 0h431v364h-431z" />
        </clipPath>
        <image
          width="431"
          height="364"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <g id="Artboard 1" clip-path="url(#cp1)">
        <use id="Layer 1" href="#img1" x="0" y="0" />
      </g>
    </svg>
  );
};
