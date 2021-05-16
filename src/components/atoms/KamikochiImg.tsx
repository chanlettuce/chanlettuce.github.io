import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';

export const KamikochiImg = () => {
  const data = useStaticQuery<GatsbyTypes.KamikochiImgQuery>(graphql`
    query KamikochiImg {
      avatar: file(absolutePath: { regex: "/kamikochi.jpg/" }) {
        childImageSharp {
          fixed(height: 200, quality: 95) {
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
