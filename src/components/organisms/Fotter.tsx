import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      Copyright © {new Date().getFullYear()}, Sho Uchida, Built with{" "}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  );
};
