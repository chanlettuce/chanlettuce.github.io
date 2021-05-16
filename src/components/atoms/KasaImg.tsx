import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';

export const KasaImg = () => {
  const data = useStaticQuery<GatsbyTypes.KasaImgQuery>(graphql`
    query KasaImg {
      avatar: file(absolutePath: { regex: "/mt-kasa.jpg/" }) {
        childImageSharp {
          fixed(width: 200, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <Image
      fixed={avatar}
      // alt={author?.name || ``}
      className="bio-avatar"
    />
  );
};
