// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"21-best-free-react-components.mdx": () => import("../blog/content/21-best-free-react-components.mdx?collection=docs"), "nextjs-portfolio-templates.mdx": () => import("../blog/content/nextjs-portfolio-templates.mdx?collection=docs"), "react-animation-libraries.mdx": () => import("../blog/content/react-animation-libraries.mdx?collection=docs"), "react-landing-page-templates.mdx": () => import("../blog/content/react-landing-page-templates.mdx?collection=docs"), "react-native-libraries.mdx": () => import("../blog/content/react-native-libraries.mdx?collection=docs"), "react-portfolio-templates.mdx": () => import("../blog/content/react-portfolio-templates.mdx?collection=docs"), }),
};
export default browserCollections;