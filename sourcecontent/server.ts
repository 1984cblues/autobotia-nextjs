// @ts-nocheck
import * as __fd_glob_5 from "../blog/content/react-portfolio-templates.mdx?collection=docs"
import * as __fd_glob_4 from "../blog/content/react-native-libraries.mdx?collection=docs"
import * as __fd_glob_3 from "../blog/content/react-landing-page-templates.mdx?collection=docs"
import * as __fd_glob_2 from "../blog/content/react-animation-libraries.mdx?collection=docs"
import * as __fd_glob_1 from "../blog/content/nextjs-portfolio-templates.mdx?collection=docs"
import * as __fd_glob_0 from "../blog/content/21-best-free-react-components.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "blog/content", {"21-best-free-react-components.mdx": __fd_glob_0, "nextjs-portfolio-templates.mdx": __fd_glob_1, "react-animation-libraries.mdx": __fd_glob_2, "react-landing-page-templates.mdx": __fd_glob_3, "react-native-libraries.mdx": __fd_glob_4, "react-portfolio-templates.mdx": __fd_glob_5, });

export const meta = await create.meta("meta", "blog/content", {});